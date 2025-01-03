import posts from '../data/post.js';

export const index = (req, res) => {
    res.status(201);
    res.send(posts)
}
export const show = (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if (post) {
        res.status(200)
        res.send(post)
    } else {
        res.status(404)
        res.send(`post not found with id`)
    }
}

export const create = (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(200).send(post)
}
export const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const newposts = posts.filter((post) => post.id !== id);
    res.status(200)
    res.send(`post with ID : ${id} has been deleted`)
}
export const modify = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, image, tags } = req.body;
    const post = posts.find((post) => post.id === id)

    if (title) {
        post.title = title
    }
    if (content) {
        post.content = content
    }
    if (image) {
        post.image = image
    }
    if (tags) {
        post.tags = tags
    }
    if (!post) {
        res.status(404)
        res.send(`post not found`)
    } else {
        res.status(200)
        res.send(post)
    }

}
