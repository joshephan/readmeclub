import Image from "next/image";

const TimelineSection = () => {
    const timelineData = [
        {
            time: "오후 7:00 ~ 7:10",
            title: "모임 준비 및 참가자 등록",
            description: "모임 준비와 참가자 등록을 진행합니다."
        },
        {
            time: "오후 7:10 ~ 8:00",
            title: "자기소개",
            description: "참가자들의 자기소개 시간입니다."
        },
        {
            time: "오후 8:00 ~ 9:20",
            title: "독서 발표",
            description: "각자 읽은 책에 대한 발표와 토론 시간입니다."
        },
        {
            time: "오후 9:20 ~ 9:30",
            title: "정리 마무리",
            description: "모임을 정리하고 마무리합니다."
        }
    ];

    return (
        <section className="py-20 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">모임 일정</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-4 text-left text-gray-600 font-semibold">시간</th>
                                <th className="px-6 py-4 text-left text-gray-600 font-semibold">내용</th>
                                <th className="px-6 py-4 text-left text-gray-600 font-semibold">설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timelineData.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 text-gray-800 font-medium">{item.time}</td>
                                    <td className="px-6 py-4 text-gray-800 font-medium">{item.title}</td>
                                    <td className="px-6 py-4 text-gray-600">{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <figure className="mt-8 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image 
                            src="/icons/lego-meeting.png" 
                            alt="cafe" 
                            width={300} 
                            height={300}
                            className="w-full max-w-[300px] h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <iframe
                            className="w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25314.08489007876!2d127.00565025772617!3d37.52535351112866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e2be5b71eb%3A0xb2794c7375e0229f!2z7JWM67Kg66W0IOqwleuCqA!5e0!3m2!1sko!2skr!4v1747740994546!5m2!1sko!2skr"
                            width="600"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <figcaption className="mt-2 text-gray-600">
                            <span className="text-xl md:text-2xl text-black">위치: 강남 알베르 커피숍</span>
                            <br />
                            <span className="text-sm md:text-base">
                                (참가 인원에 따라서 위치는 변경될 수 있습니다!)
                            </span>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default TimelineSection;