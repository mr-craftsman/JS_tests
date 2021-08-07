Inputs and forms
1). Validation.
There is a form on HTLM, that leads to 
http:// api.coderslab.pl/showpost.php
Write a validation form, so that it would be sent only, when:
- email addraess has an (at) sign
not having - shows a proper error message.
-  name is longer than 3 characters
if shorter - show proper error message
- surname is longer than 2 signs
if shorter show error message
- password and secon password confirmation are identical, but not null/empty.
show a proper error message if not
- checkbox has to be checked (policies accepting etc)

Play around with attributes, ex what happends, if two inputs have same name.

2). There is an order form on HTML. 
There is a VAT section. 
Write script, so that it will remain hidden, unless a proper checkbox is checked.

3). There are 3 images and select on HTML.
Each image is linked to one select choice.
Write script, so that only checked image is visible.

4). There is a table with scores in HTML.
Under it there is a form for referees.
Write a script, so that after choosing teams:
- both teams are visible
- amount of goals is not less than zero

After validation, its data should be shown in table as a new row.

5). Credit card validation - simplified. In real time.
Card name should be written in with 'type' id, as soon as it is possible, it should be validated after enough numbers are written. (input on green or smth)
-VISA starts with 4
-Mastercard starts with 5
-American Express starts with 3, next one should be 4 or 7
validation :
-VISA has 13-16 numbers
-Mastercard has exactly 16 numbers
-American Express has exactlny 15 numbers
These are no full validation rules, but it is enough