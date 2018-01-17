import React from 'react';
import styles from './styles.css';
import init from './init.js';
import Review from './Review.js';
import { connect } from 'react-redux';
import $ from 'jquery';
import store from './store.js';
import { setLocation, setCategory } from './Actions/detailsActions.js';
import { setFname, setLname } from './Actions/nameActions';

class App extends React.Component {

   constructor (props) {
     super(props);
     this.state = {
       reviews: init.reviews,
       category: 'All Categories',
       location: 'All Locations',
     };
   }

   componentDidMount() {
     var context = this;
     $.ajax({
       type: 'GET',
       url: 'http://localhost:3000/alldata',
       dataType: 'json',
       success: function (data) {
         console.log('success on GET');
         console.log(data, '******');
         context.setState({reviews: data});
       },
       error: function (error) {
         console.log(error);
       }
     });
   }

   queryFirstName (e) {
     // var context = this;
     // context.setState({firstName: e.target.value});
     this.props.setFname(e.target.value);
   }

   queryLastName (e) {
     // var context = this;
     // context.setState({lastName: e.target.value});
     this.props.setLname(e.target.value);
   }

   queryCategory (e) {
     // var context = this;
     // context.setState({queryCategory: e.target.value});
     this.props.setCategory(e.target.value);
   }

   queryByLocation (e) {
     // var context = this;
     // context.setState({queryLocation: e.target.value});
     this.props.setLocation(e.target.value);
   }

   filterCategory (value) {
     var context = this;
     console.log({'query': value});
     $.ajax({
       type: 'POST',
       data: {'query': value},
       url: 'http://localhost:3000/filter',
       dataType: 'json',
       success: function (data) {
         console.log('success');
         console.log(data);
         context.setState({reviews: data, location: 'All locations'});
       },
       error: function (error) {
         console.log('you have an error');
         console.log(error);
       }
     });
     context.setState({category: value});
   }
   fetchAllReviews () {
     var context = this;
     $.ajax({
       type: 'GET',
       url: 'http://localhost:3000/alldata',
       dataType: 'json',
       success: function (data) {
         console.log('success');
         console.log(data);
         context.setState({reviews: data, 
                          location: 'All Locations', 
                          category: 'All Categories'});
       },
       error: function (error) {
         console.log('you have an error');
         console.log(error);
       }
     });
   }
   handleBizLoc (e) {
     e.preventDefault();
     console.log(this.state.queryLocation);
     var context = this;
     $.ajax({
       type: 'POST',
       data: {'submit': 
       {firstName: store.getState().nameReducer.firstName, 
 		lastName: store.getState().nameReducer.lastName, 
 		category: store.getState().detailsReducer.category, 
 		location: store.getState().detailsReducer.location}},
       url: 'http://localhost:3000/getspecbiz',
       dataType: 'json',
       success: function (data) {
         if (data.length === 0 ) {
           context.setState({reviews: [ { Review: ['NOT FOUND'], FirstName: 'NOT FOUND', LastName: 'NOT FOUND', 'Rating': 'NOT FOUND', Category: 'NOT FOUND', Location: 'NOT FOUND'}], location: 'NOT FOUND', category: 'NOT FOUND'});
           return;
         } 
         if (data[0].name === 'INVALID QUERY') {
           context.setState({location: 'INVALID QUERY', category: 'INVALID QUERY', reviews: data});
         } else {
           context.setState({location: data[0].Location, category: data[0].Category}, function () {
             data.reduce(function (acc, review, index, array) {
               if (acc === false) {
                 context.setState({location: 'Multiple Locations'});
               }
               if (index + 1 !== array.length) {
                 return acc && array[index].Location === array[index + 1].Location;
               }
             }, true);

             data.reduce(function (acc, review, index, array) {
               if (acc === false) {
                 context.setState({category: 'Multiple Categories'});
               }
               if (index + 1 !== array.length) {
                 return acc && array[index].Category === array[index + 1].Category;
               }
             }, true);
           });
           context.setState({reviews: data});
         }
       },
       error: function (error) {
         console.log('you have an error');
         console.log(error);
       }
     });
   }

   render() {
     return (
        <div>
        <div onClick = { () => { this.fetchAllReviews(); } } className = {styles.headerstyles} id="logo"> Take Care </div>
          
         <div className = {styles.catpick}>
         <p >
         <span onClick = {function () { this.filterCategory('Barbers'); }.bind(this) }> Barbers | </span>
         <span onClick = {function () { this.filterCategory('Nail Technicians'); }.bind(this) }> Nail Technicians | </span>
         <span onClick = {function () { this.filterCategory('Masseuses'); }.bind(this) }> Massueses </span> 
         </p>
         </div>

         <Review reviews = {this.state.reviews} 
         category = {this.state.category} 
         location = {this.state.location} 
         queryFirstName = {this.queryFirstName.bind(this)} 
         queryLastName = {this.queryLastName.bind(this)} 
         queryCategory = {this.queryCategory.bind(this)} 
         inputLocation = {this.queryByLocation.bind(this)}
         getBizLoc = {this.handleBizLoc.bind(this)} 
         />
        </div>
     );
   }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.nameReducer,
    lastName: state.nameReducer,
    location: state.detailsReducer,
    category: state.detailsReducer 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFname: (fName) => {
      dispatch(setFname(fName));
    },
    setLname: (lName) => {
      dispatch(setLname(lName));
    },
    setLocation: (location) => {
      dispatch(setLocation(location));
    },
    setCategory: (category) => {
      dispatch(setCategory(category));
    }
  };

};


export default connect(mapStateToProps, mapDispatchToProps)(App);