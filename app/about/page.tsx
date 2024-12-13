"use client"
import { Card, Image } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className="mb-4 text-bold font-bold text-[50px]">Gallery</h1>
      <div className="gap-1 grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3">
        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-[200%] h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>
        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/gallery/9.jpeg"
          />
        </Card>
        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/gallery/23.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>

        <Card className="h-[300px] w-[400px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.railaodinga4auc.com/blogs/5.jpeg"
          />
        </Card>
      </div>
    </div>
  );
}
