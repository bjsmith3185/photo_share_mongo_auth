# photo_share_mongo_auth
Used previous version of photo_share but added an auth using mongobd instead of firebase_auth.

Trouble adding a new users to the users collection

Seems the error is because a value of null is created in the favorites field []  

I beleive this has something to do with creating an index for the favorites field.

