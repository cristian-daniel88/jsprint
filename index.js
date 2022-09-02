
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};


$('#cmd').click(function () {   
    var doc = new jsPDF();
    doc.fromHTML(` <div id="content">
    <h3>Hello, this is fjjdjdj tag</h3>
    
    <p>a pararaph</p>
    </div>`, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save(`sample-file.pdf`);
    doc = ''
    return
});

