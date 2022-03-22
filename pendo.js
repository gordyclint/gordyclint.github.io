
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="Miu8xE5CPhQhomJhOQiCIsb6o4qcQUvH";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("Miu8xE5CPhQhomJhOQiCIsb6o4qcQUvH");
  analytics.page();
  }}();


// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
//     v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

//         // Call this whenever information about your visitors becomes available
//         // Please use Strings, Numbers, or Bools for value types.
//         pendo.initialize({
//             visitor: {
//                 id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
//                 // email:        // Recommended if using Pendo Feedback, or NPS Email
//                 // full_name:    // Recommended if using Pendo Feedback
//                 // role:         // Optional

//                 // You can add any additional visitor level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },

//             account: {
//                 id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
//                 // name:         // Optional
//                 // is_paying:    // Recommended if using Pendo Feedback
//                 // monthly_value:// Recommended if using Pendo Feedback
//                 // planLevel:    // Optional
//                 // planPrice:    // Optional
//                 // creationDate: // Optional

//                 // You can add any additional account level key-values here,
//                 // as long as it's not one of the above reserved names.
//             }
//         });
// })('7c4d3ffb-17b2-4fb7-73c5-cee9416c14cd');
