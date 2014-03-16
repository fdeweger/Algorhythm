// Contains some jquery like functions the prevent long function calls

function qsa(selector)
{
    return document.querySelectorAll(selector);
}

function qs(selector)
{
    return document.querySelector(selector);
}

exports.qsa = qsa;
exports.qs = qs;