'use strict';
/*
 * davis.js
 */
let empty = function ( target ) {
  let foo = target;
  // Removing all children from an element
  while ( foo.firstChild ) {
    foo.removeChild( foo.firstChild );
  }
}

let fill = function ( target ) {
  let art = target;

  let img = document.createElement( 'img' ); // create element
  img.setAttribute( 'src', 'imgs/book-icon.png' );
  img.setAttribute( 'alt', 'book icon' );
  img.setAttribute( 'width', '64' );

  let h1 = document.createElement( 'h1' ); // create element
  let txt = document.createTextNode( 'Always' ); // create text
  h1.appendChild( txt ); // put on tree

  let par = document.createElement( 'p' ); // create element
  txt = document.createTextNode( "You could have four columns here but you won't. You'll have three like everyone else." ); // create text
  //par.appendChild( txt ); // put onto tree

  art.appendChild( img );
  art.appendChild( h1 );
  art.appendChild( txt );
  center.style.color = 'yellow';
}


let t1 = function ( ev ) {
  let target = ev.target || ev.srcElement;
  let id = target.id;
  // alert(id);
  let elm = $( id );
  if ( target.innerHTML !== '' ) {
    empty( elm );
  } else {
    switch ( id ) {
      case 'left':
        fill( elm );
        break;
    }
  }
}

let initializeL = function () {
  let left = $( 'left' );
  fill( left );
  left.addEventListener( 'click', t1, false );
}

let t2 = function ( ev ) {
  let target = ev.target || ev.srcElement;
  let id = target.id;
  // alert(id);
  let elm = $( id );
  if ( target.innerHTML !== '' ) {
    empty( elm );
  } else {
    switch ( id ) {
      case 'center':
        fill( elm );
        break;
    }
  }
}

let initializeC = function () {
  let center = $( 'center' );
  fill( center );
  center.addEventListener( 'click', t2, false );
}

let t3 = function ( ev ) {
  let target = ev.target || ev.srcElement;
  let id = target.id;
  // alert(id);
  let elm = $( id );
  if ( target.innerHTML !== '' ) {
    empty( elm );
  } else {
    switch ( id ) {
      case 'right':
        fill( elm );
        break;
    }
  }
}

let initializeR = function () {
  let right = $( 'right' );
  fill( right );
  center.addEventListener( 'click', t3, false );
}

window.addEventListener( 'load', function () {
  initializeL();
  initializeC();
  initializeR();
} );
