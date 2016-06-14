var list;
var b1, b2;
var i1, i2;
var rest;

$(function()
{
    b1 = $("#b1");
    b2 = $("#b2");

    b1.click(function()
    {
        choose1();
    });

    b2.click(function()
    {
        choose2();
    });

    $("#inputDoIt").click(function()
    {
        doIt();
    });

    $("#again").click(function()
    {
        again();
    });

});

function doIt()
{  
    var demarcator = document.getElementById("demarcatorCheck").checked ?
      document.getElementById("demarcator").value : "\n";

    list = document.getElementById("input").value.replace(/\r/g, "").split(demarcator);

    start();
}

function start()
{
    rest = [];
    $("#inputContainer").hide();
    $("#battleContainer").show();
    pit();
}

function pit()
{
    if (list.length === 1)
    {
        end();
        return;
    }

    i1 = randomInt(0, list.length);
    i2 = randomInt(0, list.length);

    if (i2 === i1)
    {
        if (i2 === list.length - 1)
        {
            i2 = 0;
        }
        else
        {
            i2++;
        }
    }

    b1.text(list[i1]);
    b2.text(list[i2]);
}

function choose1()
{
    rest.unshift(escape(list[i2]));
    list.splice(i2, 1);
    pit();
}

function choose2()
{
    rest.unshift(escape(list[i1]));
    list.splice(i1, 1);
    pit();
}

function end()
{
    $("#result").text(list[0]);
    $("#rest").html(rest.join("<br />"));
    $("#battleContainer").hide();
    $("#resultContainer").show();
}

function again()
{
    $("#resultContainer").hide();
    $("#inputContainer").show();
}

function randomInt(min, max)
{
    return parseInt(Math.random() * (max - min) + min);
}

function escape(s)
{
    $("#rest").text(s);
    return $("#rest").html();
}