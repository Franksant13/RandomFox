import { MouseEventHandler, useState } from 'react';
import { LazyImage } from "@/components/LazyImage";
import { random } from "lodash";

export default function Home() {

  // Type when using pure javascript
  // const random = (): number => Math.floor(Math.random() * 123) +1;

  // Type when using a library that doesn't have types on it
  const myRandom = () => random(1, 123);

  const generateId = () => Math.random().toString(36).substr(2,9);

  // const [images, setImages] = useState<Array<string>>([ 
  // It's the same!
  const [images, setImages] = useState<IFoxImageItem[]>([]);

  // const addNewFox = (event: { preventDefault: () => void }) => {
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImageItem = { 
      id: generateId(), 
      url: `https://randomfox.ca/images/${myRandom()}.jpg` 
    }

    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello Fox!
      </h1>
      <button onClick={addNewFox}>Add New Fox!</button>
      {
        images.map((image, index) => (
          <div className='p-4' key = { image.id }>
            <LazyImage
              src={ image.url }
              height="auto"
              width={320}
              className="rounded bg-gray-300"
              onClick={() => { console.log("Fox!") }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))
      }

    </main>
  )
}
