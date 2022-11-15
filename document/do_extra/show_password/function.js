var checkPressIntoImg = true;

function showPassword()
{
    if(checkPressIntoImg == true)
    {
        checkPressIntoImg = false;
        document.getElementById('input_pass').type = "text";
    }else if(checkPressIntoImg == false)
    {
        checkPressIntoImg = true;
        document.getElementById('input_pass').type = "password";
    }
}

document.getElementById('img_showPassword').onclick = function()
{
    showPassword();
}

