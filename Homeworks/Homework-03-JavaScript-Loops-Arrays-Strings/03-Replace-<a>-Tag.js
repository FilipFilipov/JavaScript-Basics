'use strict';

function replaceATag(input){
    var pattern = /<a (.*)>(.*)<\/a>/g;
    console.log(input.replace(pattern, '[URL $1]$2[/URL]'));
}

replaceATag('<ul>\n\t<li>\n\t\t<a href=http://softuni.bg>SoftUni</a>\n\t</li>\n</ul>');