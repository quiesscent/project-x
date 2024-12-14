"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
export default function BlogPage() {
  return (
    <div>
      <div className="text-[80px] mb-2 font-bold items-center justify-center">
        Blog
      </div>
      <div className="gap-4 grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3">
        <Card className="py-4">
          <CardBody className="overflow-visible py-2 mb-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src="https://www.railaodinga4auc.com/blogs/5.jpeg"
              width={700}
            />
            <p className="text-large uppercase font-bold mt-4">
              He visits the Town Hall{" "}
              <small className="text-default-500">12-12-2024</small>
            </p>
            <p className="text-start mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptates expedita. Ratione mollitia quia totam beatae dolores suscipit deserunt possimus, nam quos iste quidem quod atque inventore quas accusamus qui!
            </p>

            <Button radius="md" className="mx-5 mt-5">Read More</Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src="https://www.railaodinga4auc.com/blogs/5.jpeg"
              width={700}
            />
            <p className="text-large uppercase font-bold mt-4">
              He visits the Town Hall{" "}
              <small className="text-default-500">12-12-2024</small>
            </p>
            <p className="text-start mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptates expedita. Ratione mollitia quia totam beatae dolores suscipit deserunt possimus, nam quos iste quidem quod atque inventore quas accusamus qui!
            </p>
            <Button radius="md" className="mx-5 mt-5">Read More</Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src="https://www.railaodinga4auc.com/blogs/5.jpeg"
              width={700}
            />
            <p className="text-large uppercase font-bold mt-4">
              He visits the Town Hall{" "}
              <small className="text-default-500">12-12-2024</small>
            </p>
            <p className="text-start mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptates expedita. Ratione mollitia quia totam beatae dolores suscipit deserunt possimus, nam quos iste quidem quod atque inventore quas accusamus qui!
            </p>
            <Button radius="md" className="mx-5 mt-5">Read More</Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src="https://www.railaodinga4auc.com/blogs/5.jpeg"
              width={700}
            />
            <p className="text-large uppercase font-bold mt-4">
              He visits the Town Hall{" "}
              <small className="text-default-500">12-12-2024</small>
            </p>
            <p className="text-start mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptates expedita. Ratione mollitia quia totam beatae dolores suscipit deserunt possimus, nam quos iste quidem quod atque inventore quas accusamus qui!
            </p>
            <Button radius="md" className="mx-5 mt-5">Read More</Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src="https://www.railaodinga4auc.com/blogs/5.jpeg"
              width={700}
            />
            <p className="text-large uppercase font-bold mt-4">
              He visits the Town Hall{" "}
              <small className="text-default-500">12-12-2024</small>
            </p>
            <p className="text-start mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, voluptates expedita. Ratione mollitia quia totam beatae dolores suscipit deserunt possimus, nam quos iste quidem quod atque inventore quas accusamus qui!
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
