 import 'babel-polyfill';
 import $ from 'jquery';
 import reviews from './init.js'
 import React from 'react'
 import ReactDom from 'react-dom'
 import Review from './Review.js'
 

 // $('<h1>Numbers</h1>').appendTo('body');
 // const ul = $('<ul></ul>').appendTo('body');
 // for (const num of Nums) {
 //     $('<li></li>').text(num).appendTo(ul);
 // };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     reviews: reviews
  };
  var context = this;
    $.ajax({
    type: "GET",
    url: 'http://localhost:3000/alldata',
    dataType: 'json',
    success: function (data) {
      console.log('success on GET')
      context.setState({reviews:data});
    },
    error: function (error) {
      console.log(error)
    }
  });
  
}

queryByName (e) {
  console.log(e.target.value);
  var context = this;
  $.ajax({
    type: "POST",
    data: {'query': e.target.value} ,
    url: 'http://localhost:3000/bybusiness',
    dataType: 'json',
    success: function (data) {
      console.log('success')
      console.log(data)
      context.setState({reviews:data})
    },
    error: function (error) {
      console.log('you have an error')
      console.log(error)
    }
  });

}


queryByLocation (e) {
  console.log(e.target.value);
  var context = this;
  $.ajax({
    type: "POST",
    data: {'query': e.target.value} ,
    url: 'http://localhost:3000/bylocation',
    dataType: 'json',
    success: function (data) {
      console.log('success')
      console.log(data)
      context.setState({reviews:data})
    },
    error: function (error) {
      console.log('you have an error')
      console.log(error)
    }
  });
}

filterCategory (value) {
var context = this;
  console.log({'query':value.id})
  $.ajax({
    type: "POST",
    data: {'query': value.id} ,
    url: 'http://localhost:3000/filter',
    dataType: 'json',
    success: function (data) {
      console.log('success')
      console.log(data)
      context.setState({reviews:data})
    },
    error: function (error) {
      console.log('you have an error')
      console.log(error)
    }
  });

}

  render() {
    return (
    <div>

     <span id = "Barbershops" onClick = {function () {this.filterCategory(document.getElementById('Barbershops'))}.bind(this) }> Barbershops | </span>
     <span id = "Nail Salons" onClick = {function () {this.filterCategory(document.getElementById('Nail Salons'))}.bind(this) }> Nail Salons |     </span>
     <span   id = "Massage Parlors" onClick = {function () {this.filterCategory(document.getElementById('Massage Parlors'))}.bind(this) }> Massage Parlors    </span> 
     <div> - </div>
     
      <Review reviews = {this.state.reviews} inputBusiness = {this.queryByName.bind(this)} inputLocation = {this.queryByLocation.bind(this)}/>
     
    </div>
   )
  }
}

ReactDom.render(<App/>,document.getElementById('app'))

