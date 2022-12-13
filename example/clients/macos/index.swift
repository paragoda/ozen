/*

Our aim is to support sdk for all langs used in modern dev.
But It can't be done all at once.
So this client will show situation when we don't have sdk.
So there is no ozen.json <- config file

It will use api calls, so it should be understandable.
Like:
/posts?select=id,title,authors(id,name)&where=authors.id.eq(10)
Or (without [table] route):
/select=posts(id,title,authors(id,name))&where=authors.id.eq(10)&orderby=posts.id

*/