"use client";
import { Card, CardBody, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
export default function BlogPage() {
  return (
    <>

      <div className="flex">
        <div className="flex-auto">
          <Card isFooterBlurred className="md:w-[900px] md:h-[400px] col-span-12 sm:col-span-2">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://www.railaodinga4auc.com/gallery/9.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-[35px] text-white">Ruto inaugurates Raila bid for AU seat campaigns</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <div className="w-[1000px] text-justify mt-7">
            <h1 className="text-[30px] font-bold mb-10">Ruto inaugurates Raila bid for AU seat campaigns</h1>
            <p className="mb-8">
              Excellencies, I am ready to serve, my heart is ready, my hands are steady and with your support, I shall get the opportunity to be of service to Africa.
            </p>
          </div>

          <Card isFooterBlurred className="sm:w-[100px] sm:h-[00px] lg:w-[900px] lg:h-[500px] col-span-12 sm:col-span-2">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://www.railaodinga4auc.com/blogs/2.jpeg"
            />
          </Card>
          <div className="w-[1000px] text-justify mt-7">
            <p>Excellencies, I am ready to serve, my heart is ready, my hands are steady and with your support, I shall get the opportunity to be of service to Africa, the cradle of mankind. I am made in Eastern Africa for Africa.

              That was Raila Odinga's solemn plea to the continent as he embarked on his journey to clinch the African Union Commission chairmanship yesterday. In his high powered audience at the State House Nairobi included four heads of state, two former heads of state and a prime minister. They included the current East Africa Community (EAC) chairman and South Sudan President Salva Kiir Ma-yardit, Tanzania President Samia Suluhu Hassan, Uganda's Yoweri Museveni, Rwanda's State Minister for Foreign Affairs James Kabarebe and Burundian Prime Minister Gervais Ndirakobuca and former Presidents Jakaya Kikwete (Tanzania) and Olusegun Obasanjo (Nigeria).

              It is this dignified gathering that Raila reached out to yesterday as he was unveiled as Kenya's candidate for the high-profile position. 'Kindly buy my vision, the charge is 34 plus votes in the first round. I particularly appeal to fellow East Africans, that we walk this journey together and go to Addis as a team in February 2025,' Raila pleaded.

              In the elections set for February next year, Raila will square it out with Madagascar's Richard Randriamandrato, Djibouti Foreign Affairs Minister Mahmoud Ali Youssouf and Anil Kumarsingh Gayan to succeed Moussa Faki Mahamat from Chad.

              Raila said if elected to office, his vision will be to unite the continent so that it can speak in one voice against the challenges facing. He vowed to utilize the transition period to critically analyze the existing proposals for reforms and building capacity of the commission and follow up on the implementation of the reports so far formulated.

              I envisage an Africa where our visionary sloganeering will translate into strategic action for the transformation of our continent. I plan to work with you, Your Excellencies, and make the ALJ more people-centered and serve the interests of the vast voiceless majority of Africans,' Raila assured the high-profile meeting.</p>
          </div>
        </div>
        <div className="border-r-black flex-auto w-200">
          <h1 className="font-bold text-[40px]">Related Blogs</h1>
          <ul className="list-outside ">
          <li className=" mb-10">
            <div className="border-l-black">AU Needs to Raise Climate Change Awareness</div></li>
          <li className="border-l-black mb-10">AU Needs to Raise Climate Change Awareness</li>
          <li className="border-l-black mb-10">AU Needs to Raise Climate Change Awareness</li>
          <li className="border-l-black mb-10">AU Needs to Raise Climate Change Awareness</li>
        </ul>
      </div>
    </div >
    </>
  );
}
