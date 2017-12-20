# BlogApp
***
#### Technology/Tools
* RESTful design
* NodeJS
* Express
* MongoDB/Mongoose
* Semantic UI

| Name        | Path           | HTTP  | Purpose | Mongoose Method |
| ------------- |:-------------:| -----:| ----:| ----:|
| Index | /blogs  | GET | List all blogs | Blog.find() |
| New | /blogs/new | GET | Show new blog form | N/A |
| Create | /blogs | POST | Create a new blog, then redirect somewhere | Blog.create() |
| Show | /blogs/:id | GET | Show info about one specific blog | Blog.findById() |
| Edit | /blogs/:id/edit | GET | Show edit form for one blog | Blog.findById() |
| Update | /blogs/:id | PUT | Update particular blog, then redirect somewhere | Blog.findByIdAndUpdate() |
| Destroy | /blogs/:id | DELETE | Delete a particular blog, then redirect somewhere | Blog.findByIdAndRemove() |


