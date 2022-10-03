import { Post } from "./Post";

export function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Post
        author="Felipe Bastos"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus ipsa hic aut voluptatum veritatis accusamus, natus ad, rerum dignissimos alias maiores blanditiis repellat, error debitis sunt placeat beatae iste?"
      />
      <Post
        author="Felipe Bastos"
        content="Um post muito legal"
      />
    </div>
  );
}
