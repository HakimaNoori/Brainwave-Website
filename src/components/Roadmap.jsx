import { check2, loading1 } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to grt started" title="What we're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div key={item.id}>
                <div>
                  <div>
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between">
                      <Tagline>{item.date}</Tagline>
                      <div>
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt="status"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                      <div className="mb-10">
                        <img
                          src={item.imageUrl}
                          className="w-full"
                          width={630}
                          height={420}
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
