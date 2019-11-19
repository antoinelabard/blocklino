/*
        Ffau - A blocky-based editor for teaching HTML, CSS and Javascript.

				Developed by Pal Kerecsenyi, Geza Kerecsenyi and Oli Plant.
				Full details are avaliable at the Github repo: https://github.com/codeddraig/ffau
				Ffau editor will not work without its libraries. The best way to get all
					off this data at once is to grab the latest release version from the
					Github repo or to install via NPM.
				Ffau is open source software. This means you can re-mix, share and use
					it however you want, including for commercial purposes. However, you
					MUST provide attribution to the original authors if you do this.
				However, Ffau is provided with NO WARRANTY whatsoever, and by using this
					software, you agree to the terms of the MIT License.

				Copyright (c) 2017-19 The CodeDdraig Organisation

				THIS IS VERSION 1.2.2
*/

htmlGen['textshadow-new'] = function (block) {
    var x = fullEscape(block.getFieldValue('xoffset'));
    var y = fullEscape(block.getFieldValue('yoffset'));
    var b = fullEscape(block.getFieldValue('blur'));
    var c = htmlGen.statementToCode(block, 'color', htmlGen.ORDER_ATOMIC).trim();

    return `text-shadow: ${x} ${y} ${b} ${c};\n`;
};

htmlGen['boxshadow-new'] = function (block) {
    var x = fullEscape(block.getFieldValue('x-offset'));
    var y = fullEscape(block.getFieldValue('y-offset'));
    var blur = fullEscape(block.getFieldValue('blur'));

    var color = htmlGen.statementToCode(block, 'color', htmlGen.ORDER_ATOMIC).trim();

    return `box-shadow: ${x} ${y} ${blur} ${color};\n`;
};

htmlGen['textshadow'] = function (block) {
    var x = fullEscape(block.getFieldValue('xoffset'));
    var y = fullEscape(block.getFieldValue('yoffset'));
    var b = fullEscape(block.getFieldValue('blur'));
    var c = block.getFieldValue('color');

    return `text-shadow: ${x} ${y} ${b} ${c};\n`;
};

htmlGen['boxshadow'] = function (block) {
    var x = fullEscape(block.getFieldValue('x-offset'));
    var y = fullEscape(block.getFieldValue('y-offset'));
    var blur = fullEscape(block.getFieldValue('blur'));

    var color = block.getFieldValue('color');

    return `box-shadow: ${x} ${y} ${blur} ${color};\n`;
};

htmlGen['texttransform'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-transform: ${value};\n`;
};

htmlGen['textalign'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-align: ${value};\n`;
};

htmlGen['letterspacing'] = function (block) {
    var value = block.getFieldValue('value');
    return `letter-spacing: ${ fullEscape(value) };\n`;
};

htmlGen['display'] = function (block) {
    var value = block.getFieldValue('content');
    return 'display: ' + value + ';\n';
};

htmlGen['overflow'] = function (block) {
    var value = block.getFieldValue('content');
    var direction = block.getFieldValue('direction');

    return `overflow-${direction}: ${value};\n`;
};

htmlGen['linkhead'] = function (block) {
    var library = block.getFieldValue('library');

    var code;
    if (library === "bootstrap") {
        code = '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">\n';
    } else if (library === "materialize") {
        code = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n';
    } else if (library === "magic") {
        code = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/magical-css@latest/dist/magic.css">\n';
    }

    return code;
};

htmlGen['bgcolor-new'] = function (block) {
    var color = htmlGen.statementToCode(block, 'value', htmlGen.ORDER_ATOMIC).trim();
    return 'background-color: ' + color + ';\n';
};

htmlGen['bgcolor'] = function (block) {
    var color = block.getFieldValue('value');
    return 'background-color: ' + color + ';\n';
};

htmlGen['bgimage'] = function (block) {
    var content = block.getFieldValue('content');
    return 'background-image: url("' + URLInput(content) + '");\n';
};

htmlGen['bgposition'] = function (block) {
    var content = block.getFieldValue('content');
    return 'background-position: ' + content + ';\n';
};

htmlGen['bgrepeat'] = function (block) {
    var content = block.getFieldValue('content');
    var code = 'background-repeat: ' + content + ';\n';
    return code;
};

htmlGen['bgsize'] = function (block) {
    var content = block.getFieldValue('content');
    var code = 'background-size: ' + fullEscape(content) + ';\n';
    return code;
};

htmlGen['border-new'] = function (block) {
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = htmlGen.statementToCode(block, 'color', htmlGen.ORDER_ATOMIC).trim();

    return 'border: ' + width + 'px ' + type + ' ' + color + ';\n';
};

htmlGen['borderedge-new'] = function (block) {
    var edge = block.getFieldValue('edge');
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = htmlGen.statementToCode(block, 'color', htmlGen.ORDER_ATOMIC).trim();

    return `border-${edge}: ${width}px ${type} ${color};\n`;
};

htmlGen['border'] = function (block) {
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = block.getFieldValue('color');

    return 'border: ' + width + 'px ' + type + ' ' + color + ';\n';
};

htmlGen['borderedge'] = function (block) {
    var edge = block.getFieldValue('edge');
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = block.getFieldValue('color');

    return `border-${edge}: ${width}px ${type} ${color};\n`;
};

htmlGen['borderrad'] = function (block) {
    var content = block.getFieldValue('content');
    return 'border-radius: ' + fullEscape(content) + ';\n';
};

htmlGen['cursor'] = function (block) {
    var content = block.getFieldValue('content');
    return 'cursor: ' + content + ';\n';
};

htmlGen['bordercol'] = function (block) {
    var collapse = block.getFieldValue('value');

    var code;
    if (collapse === "TRUE") {
        code = 'border-collapse: collapse;\n';
    } else {
        code = 'border-collapse: separate;\n';
    }

    return code;
};

htmlGen['widthheightnum'] = function (block) {
    var option = block.getFieldValue('option');
    var size = block.getFieldValue('size');

    return option + ': ' + fullEscape(size) + ';\n';
};

htmlGen['widthheight'] = function (block) {
    var option = block.getFieldValue('option');
    var value = block.getFieldValue('value');

    return option + ': ' + value + ';\n';
};

htmlGen['float'] = function (block) {
    return 'float: ' + block.getFieldValue('content') + ';\n';
};

htmlGen['verticalalign'] = function (block) {
    var align = block.getFieldValue('align');

    return `vertical-align: ${align};\n`;
};

htmlGen['transition'] = function (block) {
    var property = fullEscape(block.getFieldValue('transition-property'));
    var duration = fullEscape(block.getFieldValue('duration'));
    var delay = fullEscape(block.getFieldValue('delay'));
    var timing = htmlGen.statementToCode(block, 'timing-function', htmlGen.ORDER_ATOMIC);

    return `transition-property: ${property};\ntransition-duration: ${duration};\ntransition-delay: ${delay};\ntransition-timing-function: ${timing};\n`;
};

htmlGen['transitiontimingdropdown'] = function (block) {
    return block.getFieldValue('function');
};

htmlGen['transitiontimingbezier'] = function (block) {
    var bez1 = fullEscape(block.getFieldValue('bez1'));
    var bez2 = fullEscape(block.getFieldValue('bez2'));
    var bez3 = fullEscape(block.getFieldValue('bez3'));
    var bez4 = fullEscape(block.getFieldValue('bez4'));

    return `cubic-bezier(${bez1}, ${bez2}, ${bez3}, ${bez4})`;
};

htmlGen['othercss'] = function (block) {
    var property = fullEscape(block.getFieldValue('property'));

    var value = fullEscape(block.getFieldValue('value'))
        .replace(/%20/g, " ")
        .replace(/%28/g, "(")
        .replace(/%29/g, ")");

    var code = property + ': ' + value + ';\n';
    return code;
};

htmlGen['emptytext'] = function (block) {
    var text_content = block.getFieldValue('content');
    return '\n' + looseEscape(text_content) + '\n';
};

htmlGen['paragraph'] = function (block) {
    var statements_content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier');
    return '<p' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + statements_content + '</p>\n';
};

htmlGen['header'] = function (block) {
    var statements_content = htmlGen.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC).trim();
    return '<h' + (header_size + ' ' + block_modifier).trim() + '>' + statements_content + '</h' + header_size + '>\n';
};

htmlGen['textmod'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var type = block.getFieldValue("type");
    return '\n<' + type + '>' + content + '</' + type + '>\n';
};

htmlGen['span'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<span' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</span>';
};

htmlGen['link'] = function (block) {
    var text = htmlGen.statementToCode(block, 'content');
    var bareLink = block.getFieldValue('target');
    var link = URLInput(block.getFieldValue('target'));
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var target = '';

    if (isNewTabUrl(bareLink)) {
        target = ' target="_blank"';
    }

    return '<a href="' + link + '"' + target + (block_modifier ? " " + block_modifier.trim() : "") + '>' + text + '</a>\n';
};

htmlGen['table'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<table' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</table>\n';
};

htmlGen['tablerow'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<tr' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</tr>\n';
};

htmlGen['tableheading'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<th' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</th>\n';
};

htmlGen['tabledata'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<td' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</td>\n';
};

htmlGen['form'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<form' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</form>\n';
};

htmlGen['input'] = function (block) {
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    var placeholder = looseEscape(block.getFieldValue('placeholder'));
    var name = looseEscape(block.getFieldValue('name'));

    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<input type="' + type + '" value="' + value + '" placeholder="' + placeholder + '" name="' + name + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
};

htmlGen['label'] = function (block) {
    var labelFor = block.getFieldValue('for');
    var content = htmlGen.statementToCode(block, 'content');

    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    return '<label for="' + looseEscape(labelFor) + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</label>\n';
};

htmlGen['image'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var code = '<img src="' + (URLInput(source) || 'https://codedragon.org/img/no_image.png') + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
    return code;
};

htmlGen['orderedlist'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var code = '<ol' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ol>\n';
    return code;
};

htmlGen['unorderedlist'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var code = '<ul' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ul>\n';
    return code;
};

htmlGen['listitem'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var code = '<li' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</li>\n';
    return code;
};

htmlGen['details'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var code = '<details' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</details>\n';
    return code;
};

htmlGen['summary'] = function (block) {
    var content = htmlGen.statementToCode(block, 'content');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);
    var code = '<summary' + (block_modifier ? " " + block_modifier.trim() : "") + '>' + content + '</summary>\n';
    return code;
};

htmlGen['rgba_picker'] = function (block) {
    var r = looseEscape(block.getFieldValue('r'));
    var g = looseEscape(block.getFieldValue('g'));
    var b = looseEscape(block.getFieldValue('b'));
    var a = looseEscape(block.getFieldValue('a'));

    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

htmlGen['hex_picker'] = function (block) {
    return "#" + hexEscape(block.getFieldValue('color'));
};

htmlGen['color_picker'] = function (block) {
    return looseEscape(block.getFieldValue('color'));
};

htmlGen['audio'] = function (block) {
    var source = block.getFieldValue('source');
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var controls = block.getFieldValue('controls');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);

    var code = '<audio' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") {
        code += ' loop';
    }
    if (autoplay === "TRUE") {
        code += ' autoplay';
    }
    if (controls === "TRUE") {
        code += ' controls';
    }

    var type;
    var url;
    switch (source) {
        case "8bit.ogg":
            url = 'https://firebasestorage.googleapis.com/v0/b/cdr-app-firebase.appspot.com/o/8bit.ogg?alt=media&token=be7cc7aa-08b2-4ca4-95bd-677111139c8f';
            type = "audio/ogg";
            break;
        case "classical.mp3":
            url = 'https://firebasestorage.googleapis.com/v0/b/cdr-app-firebase.appspot.com/o/classical.mp3?alt=media&token=f9a9f301-5dd2-4c3d-8857-f9883b584070';
            type = "audio/mpeg";
            break;
        case "happy.wav":
            url = 'https://firebasestorage.googleapis.com/v0/b/cdr-app-firebase.appspot.com/o/happy.wav?alt=media&token=a7fcd6f6-7f5d-40c4-b172-c135471244b1';
            type = "audio/wav";
            break;
    }

    code += '>\n<source src="' + url + '" type="' + type + '">\n</audio>\n';
    return code;
};

htmlGen['video'] = function (block) {
    var source = block.getFieldValue('source');
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var controls = block.getFieldValue('controls');
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC);

    var code = '<video' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") {
        code += ' loop';
    }
    if (autoplay === "TRUE") {
        code += ' autoplay';
    }
    if (controls === "TRUE") {
        code += ' controls';
    }

    var type = "video/mp4";
    switch (source) {
        case "bbb":
            source = "https://firebasestorage.googleapis.com/v0/b/cdr-app-firebase.appspot.com/o/bigbuckbunny_trail_720p.mp4?alt=media&token=4795c3dd-9271-4801-96da-34da2f0c65d7";
            break;
        case "ld":
            source = "https://firebasestorage.googleapis.com/v0/b/cdr-app-firebase.appspot.com/o/llamadrama_720p.mp4?alt=media&token=5ce29fab-e766-44d1-bc99-481ee2fc63cd";
            break;
    }
    code += '>\n<source src="' + source + '" type="' + type + '">\n</video>\n';
    return code;
};

htmlGen['chart'] = function (block) {
    var block_modifier = htmlGen.statementToCode(block, 'modifier', htmlGen.ORDER_ATOMIC).trim();
    var attributes = (block_modifier ? " " + block_modifier.trim() : "")
    var data = htmlGen.statementToCode(block, 'data', htmlGen.ORDER_ATOMIC);
    var title = looseEscape(block.getFieldValue('title'));
    var subtitle = looseEscape(block.getFieldValue('subtitle'));
    var chartType = block.getFieldValue('type');
    var chartOrientation = '';
    var chartLibrary;
    var chartOptions = 'options';

    if (chartType === 'Column') {
        chartType = 'Bar';
        chartOrientation = 'vertical';
        chartLibrary = 'charts';
    } else if (chartType === 'Bar') {
        chartOrientation = 'horizontal';
        chartLibrary = 'charts';
    } else {
        chartLibrary = 'visualization';
    }

    if (chartType !== 'PieChart') {
        chartOptions = `google.charts.${chartType}.convertOptions(options)`;
    }

    var divId = makeid(6);

    return `
<div id="${divId}" ${attributes}></div>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
  google.charts.load('current', {'packages':['bar', 'corechart']});
  google.charts.setOnLoadCallback(function() {
    var data = google.visualization.arrayToDataTable([${data}
    ]);
      
    var options = {
      chart: {
        title: '${title}',
        subtitle: '${subtitle}'
      },
      orientation: '${chartOrientation}'
    }
      
    var chart = new google.${chartLibrary}.${chartType}(document.getElementById('${divId}'));
    chart.draw(data, ${chartOptions});
  });
</script>\n`;
};

htmlGen['chart_row'] = function (block) {
    var columns = htmlGen.statementToCode(block, 'columns', htmlGen.ORDER_ATOMIC).trim();
    return `
    [${columns}],`
};

htmlGen['chart_column'] = function (block) {
    var value = looseEscape(block.getFieldValue('value'));

    if (isNaN(value)) {
        value = `'${value}'`;
    }

    return `${value},`;
};

htmlGen['scrollspy'] = function (block) {
    var elementId = looseEscape(block.getFieldValue('element'));
    return `
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/gumshoe@5.1/dist/gumshoe.polyfills.min.js"></script>
<script>
  new Gumshoe('#${elementId} a');
</script>\n`;
};
