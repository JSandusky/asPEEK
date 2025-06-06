/*
 Copyright (c) 2012 Muhammed Ikbal Akpaca

 This software is provided 'as-is', without any express or implied
 warranty. In no event will the authors be held liable for any damages
 arising from the use of this software.

 Permission is granted to anyone to use this software for any purpose,
 including commercial applications, and to alter it and redistribute it
 freely, subject to the following restrictions:

 1. The origin of this software must not be misrepresented; you must not
 claim that you wrote the original software. If you use this software
 in a product, an acknowledgment in the product documentation would be
 appreciated but is not required.

 2. Altered source versions must be plainly marked as such, and must not be
 misrepresented as being the original software.

 3. This notice may not be removed or altered from any source
 distribution.
*/

function RequestSection(id)
{
  doSend("GETF " + id);
}
function SendConsoleCommand(evt)
{
  if(evt.keyCode === 13)
  {
    doSend("EXCT " + elements.selectModule.val() + "?" + $(evt.currentTarget).val());
    $(evt.currentTarget).val("");
  }
}

function SendStepOver()
{
  doSend("STOV");
}

function SendContinue()
{
  doSend("CONT");
}

function SendStepIn()
{
  doSend("STIN");
}

function SendStepOut()
{
  doSend("STOU");
}

function SendRestart()
{
  doSend("RSTR");
}

function RequestGlobalVariable(mod, name)
{
  doSend("GETV?"+ mod + "?" + name);
}

function AssignVariable(isLocal,request)
{
    if (isLocal)
        doSend("SETS " + request);
    else
        doSend("SETT " + request);
}