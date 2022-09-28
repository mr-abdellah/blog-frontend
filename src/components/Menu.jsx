import React from 'react'

const Menu = () => {
    const posts = [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur fuga in suscipit error fugiat assumenda laudantium consequuntur voluptas. Delectus quis explicabo at corrupti dolorem perspiciatis error est architecto illo.",
        img: 'https://bit.ly/3ffGH64',
      },
      {
        id: 2,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur fuga in suscipit error fugiat assumenda laudantium consequuntur voluptas. Delectus quis explicabo at corrupti dolorem perspiciatis error est architecto illo.",
        img: 'https://bit.ly/3ffGH64',
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur fuga in suscipit error fugiat assumenda laudantium consequuntur voluptas. Delectus quis explicabo at corrupti dolorem perspiciatis error est architecto illo.",
        img: 'https://bit.ly/3ffGH64',
      },
    ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{ post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
