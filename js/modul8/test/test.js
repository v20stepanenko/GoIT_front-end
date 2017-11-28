var tmpl = '<ul>\
  <% for (var i=1; i<=count; i++) { %> \
    <li><%=i%></li> \
  <% } %>\
</ul>';
var test = document.querySelector('#test');
 test.innerHTML = _.template(tmpl)({count: 5});