/*
The Link Resolver is a function that takes in a Prismic document object
or Link field and returns the corresponding URL for that page in your site. 
For example, If a document type is "page" with a UID of "about" will generate
the URL path: /about. If the document type is other than "page", 
It will return the website's root: "/" without the UID.
*/

exports.linkResolver = (doc) => {
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
  
    return '/'
  }