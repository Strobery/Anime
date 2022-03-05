import Section from '@/components/shared/Section';
import Head from '@/components/shared/Head';
import Image from '@/components/shared/Image';
import Button from '@/components/shared/Button';
import Link from "next/link";

function Error() {
    return (
        <Section className="w-full h-screen flex items-center">
            <div className="flex flex-col items-center w-full text-center md:text-left md:items-start">
               <Head title={`이 페이지는 현재 접속할 수 없는 페이지 입니다!!`} />

               <div className="mb-4 text-gray-300">
                  <span className="text-base">
                        페이지 오류{" "}
                    <span className="text-red-300">not Found 404</span>
                 </span>   
                </div>
            <p className="text-3xl font-semibold">
            이페이지는 존재하지 않는 페이지 입니다.
        </p>

        <p className="text-xl text-gray-200 mt-4">
            페이지 주소를 다시한번 확인해주세요
        </p>

        <Link href="/">
          <a>
           <Button primary outline className="mt-8">
               <p>홈페이지로 돌아가기</p>
            </Button>
          </a>
        </Link>
      </div>

      <div className="hidden md:block relative w-full h-full grow">
             <Image 
                src="/error-background.png"
                alt="404"
                objectFit='contain'
                className="grow"
                layout="fill"
                />
      </div>
    </Section>
  );
}

Error.getLayout = (page) => page;


export default Error;