/*

For exmaple rust for main server as one of the fastest.

Should have routes for ozen:
  /db
  /auth
  /storage

Can make them under group route to seperate from extra functionalty:
  /ozen
    /db
    /auth
    /storage
  /extra
    /special-func

It will need not full orm, because our extra functionality only use authors table.
That's cool because we don't keep unnesassary code in our proj.
Ozen is cool, because we can easily combine langs to work with db.
For example ozen handler in rust, but extra functionality in ts (because web dev).
And we can use any db connector, for example planetscale js lib for sending req to db.

*/

fn main() {
    println!("Ozen!");
}
