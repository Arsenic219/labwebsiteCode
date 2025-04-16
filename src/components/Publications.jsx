import { useEffect, useState } from "react";

export default function Publications() {
  const [teachingPubs, setTeachingPubs] = useState([]);
  const [otherPubs, setOtherPubs] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const teachingRes = await fetch(
          "https://raw.githubusercontent.com/Arsenic219/labwebsite/main/publications/publications1.json"
        );
        const otherRes = await fetch(
          "https://raw.githubusercontent.com/Arsenic219/labwebsite/main/publications/publications.json"
        );

        const teachingData = await teachingRes.json();
        const otherData = await otherRes.json();

        setTeachingPubs(teachingData);
        setOtherPubs(otherData);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    fetchPublications();
  }, []);

  const renderPublications = (list) =>
    list.map((pub, idx) => (
      <div
        key={idx}
        className="p-4 border rounded-lg bg-gray-50 text-left shadow-sm"
      >
        <div className="text-gray-800 mb-1 text-md">
          {idx + 1}.{" "}
          <span dangerouslySetInnerHTML={{ __html: pub.description }} />
        </div>

        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            Read More
          </a>
        )}

        {pub.image && (
          <img
            src={pub.image}
            alt={`publication-${idx}`}
            className="mt-4 w-full max-w-md rounded shadow-md"
          />
        )}
      </div>
    ));

  return (
    <section className="p-6 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Publications</h2>

      <div className="flex flex-col gap-8">
        {/* PhD & Postdoc Publications */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            PUBLICATIONS FROM IIT (BHU)
          </h3>
          <div className="space-y-4">{renderPublications(otherPubs)}</div>
        </div>

        {/* Other Publications */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            IMPORTANT PUBLICATIONS FROM POST-DOC AND Ph.D.
          </h3>
          <div className="space-y-4">{renderPublications(teachingPubs)}</div>
        </div>
      </div>
    </section>
  );
}
