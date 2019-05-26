
var json2from_Obj = {
    type: "text",
    label: true,
    name: "Name",
    value: 50,
    mainField: "formData"
};

function json2from(obj) {
    var output = "";
    if (obj == null) {
        return false;
    }
    if (obj.type == "text") {
        output = json2from_createInput(obj)
    }

    document.getElementById(obj.mainField).appendChild(output);

    console.log(json2from_Obj);
}



function json2from_createInput(obj) {
    if (obj == null) {
        return false;
    }
    if (obj.type == "text") {
        return json2from_getHTML_input(obj);
    }
}

function json2from_getHTML_input(obj) {
    if (obj == null) {
        return false;
    }
    var j2fMainField = document.createElement("DIV");
    if (obj.label) {
        j2fMainField.appendChild(json2from_getHTML_Label(obj));
    }    
    var j2fField = document.createElement("INPUT");
    j2fField.name = obj.name;
    j2fField.type = obj.type;
    j2fField.value = obj.value;
    j2fMainField.appendChild(j2fField);
    return j2fMainField;
}

function json2from_getHTML_Label(obj) {
    if (obj == null) {
        return false;
    }
    var j2fLabel = document.createElement("LABEL");
    var j2fLabelText = document.createTextNode(obj.name);
    j2fLabel.appendChild(j2fLabelText);
    return j2fLabel;
}