 import $ from 'jquery';
 import reviews from './init.js';
 import React from 'react';
 import ReactDom from 'react-dom';
 import Review from './Review.js';
 import styles from './styles.css';

 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       reviews: reviews,
       category: 'All Categories',
       location: 'All Locations',
       queryLocation: '',
       queryName: '',
       name: ''
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
         context.setState({reviews: data});
       },
       error: function (error) {
         console.log(error);
       }
     });
   }

   queryByName (e) {
     var context = this;
     context.setState({queryName: e.target.value});
   }

   queryByLocation (e) {
     var context = this;
     context.setState({queryLocation: e.target.value});
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
         context.setState({reviews: data});
         context.setState({location: 'All Locations'});
       },
       error: function (error) {
         console.log('you have an error');
         console.log(error);
       }
     });
     context.setState({category: value});
   }
   handleBizLoc (e) {
     e.preventDefault();
     console.log(this.state.queryName);
     console.log(this.state.queryLocation);
     var context = this;
     $.ajax({
       type: 'POST',
       data: {'submit': 
       {name: context.state.queryName, location: context.state.queryLocation}},
       url: 'http://localhost:3000/getspecbiz',
       dataType: 'json',
       success: function (data) {
        console.log(data.length);
         if (data.length === 0 ) {
           context.setState({reviews: [{name: 'NOT FOUND '}], location: 'NOT FOUND ', category: 'NOT FOUND'});
         } else {
           context.setState({location: data[0].location}, function () {
             data.reduce(function (acc, review, index, array) {
               if (acc === false) {
                 context.setState({location: 'Multiple Locations', category: 'All Categories' });
               }
               console.log(acc);
               if (index + 1 !== array.length) {
                 return acc && array[index].location === array[index + 1].location;
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
        
         <p className = {styles}>
         <span className = {styles.catpick} onClick = {function () { this.filterCategory('Barbershops'); }.bind(this) }> Barbershops | </span>
         <span className = {styles.catpick} onClick = {function () { this.filterCategory('Nail Salons'); }.bind(this) }> Nail Salons | </span>
         <span className = {styles.catpick} onClick = {function () { this.filterCategory('Massage Parlors'); }.bind(this) }> Massage Parlors </span> 
         </p>

         <Review reviews = {this.state.reviews} category = {this.state.category} location = {this.state.location} inputBusiness = {this.queryByName.bind(this)} inputLocation = {this.queryByLocation.bind(this)} getBizLoc = {this.handleBizLoc.bind(this)}/>
        </div>
     );
   }
}

 ReactDom.render(<App/>, document.getElementById('app'));

