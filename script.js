/**
* copyright
* SPDX-FileCopyrightText: © 2022 DeEsperanza
* SPDX-License-Identifier: BSD-3-Clause
*/

const myRequest = new Request(`test.txt`);
fetch(myRequest)
      .then((response) => response.text())
      .then((text) => {
            document.getElementById('home').innerHTML = text;
      });

/*
document.getElementById('home').innerHTML = 
      marked.parse('# Bienvenid@s'); 
*/