import { ChevronDown } from "lucide-react"

const Header = () => {
  return (
<div className="h-[42px] w-full flex justify-between items-center top-[25px] fixed z-10 px-[6vw]">
<svg width="141" height="25" viewBox="0 0 141 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M45.6 16.38H50.16V19H42.18V4.86H45.6V16.38ZM55.9708 7.7C56.8241 7.7 57.5574 7.89333 58.1708 8.28C58.7841 8.66667 59.2374 9.19333 59.5308 9.86V7.84H62.9308V19H59.5308V16.98C59.2374 17.6467 58.7841 18.1733 58.1708 18.56C57.5574 18.9467 56.8241 19.14 55.9708 19.14C55.0508 19.14 54.2241 18.9133 53.4908 18.46C52.7708 17.9933 52.1974 17.3267 51.7708 16.46C51.3574 15.5933 51.1508 14.58 51.1508 13.42C51.1508 12.2467 51.3574 11.2333 51.7708 10.38C52.1974 9.51333 52.7708 8.85333 53.4908 8.4C54.2241 7.93333 55.0508 7.7 55.9708 7.7ZM57.0708 10.7C56.3374 10.7 55.7441 10.94 55.2908 11.42C54.8508 11.9 54.6308 12.5667 54.6308 13.42C54.6308 14.2733 54.8508 14.94 55.2908 15.42C55.7441 15.9 56.3374 16.14 57.0708 16.14C57.7908 16.14 58.3774 15.8933 58.8308 15.4C59.2974 14.9067 59.5308 14.2467 59.5308 13.42C59.5308 12.58 59.2974 11.92 58.8308 11.44C58.3774 10.9467 57.7908 10.7 57.0708 10.7ZM72.3655 7.72C73.6455 7.72 74.6588 8.14667 75.4055 9C76.1655 9.85333 76.5455 11.0267 76.5455 12.52V19H73.1255V12.92C73.1255 12.1733 72.9255 11.5933 72.5255 11.18C72.1388 10.7533 71.6188 10.54 70.9655 10.54C70.2721 10.54 69.7188 10.76 69.3055 11.2C68.9055 11.64 68.7055 12.2667 68.7055 13.08V19H65.2855V7.84H68.7055V9.88C69.0255 9.21333 69.4988 8.68667 70.1255 8.3C70.7655 7.91333 71.5121 7.72 72.3655 7.72ZM83.0411 7.7C83.8944 7.7 84.6278 7.89333 85.2411 8.28C85.8544 8.66667 86.3011 9.19333 86.5811 9.86V4.2H90.0011V19H86.5811V16.98C86.3011 17.6467 85.8544 18.1733 85.2411 18.56C84.6278 18.9467 83.8944 19.14 83.0411 19.14C82.1211 19.14 81.2944 18.9133 80.5611 18.46C79.8411 17.9933 79.2678 17.3267 78.8411 16.46C78.4278 15.5933 78.2211 14.58 78.2211 13.42C78.2211 12.2467 78.4278 11.2333 78.8411 10.38C79.2678 9.51333 79.8411 8.85333 80.5611 8.4C81.2944 7.93333 82.1211 7.7 83.0411 7.7ZM84.1411 10.7C83.4078 10.7 82.8144 10.94 82.3611 11.42C81.9211 11.9 81.7011 12.5667 81.7011 13.42C81.7011 14.2733 81.9211 14.94 82.3611 15.42C82.8144 15.9 83.4078 16.14 84.1411 16.14C84.8611 16.14 85.4478 15.8933 85.9011 15.4C86.3678 14.9067 86.6011 14.2467 86.6011 13.42C86.6011 12.58 86.3678 11.92 85.9011 11.44C85.4478 10.9467 84.8611 10.7 84.1411 10.7ZM96.5958 7.7C97.4491 7.7 98.1824 7.89333 98.7958 8.28C99.4091 8.66667 99.8624 9.19333 100.156 9.86V7.84H103.556V18.94C103.556 19.98 103.356 20.9133 102.956 21.74C102.556 22.58 101.942 23.2467 101.116 23.74C100.289 24.2333 99.2624 24.48 98.0358 24.48C96.3558 24.48 95.0091 24.08 93.9958 23.28C92.9958 22.4933 92.3958 21.42 92.1958 20.06H95.5758C95.6824 20.5133 95.9224 20.8667 96.2958 21.12C96.6824 21.3733 97.1824 21.5 97.7958 21.5C98.5024 21.5 99.0691 21.2933 99.4958 20.88C99.9358 20.48 100.156 19.8333 100.156 18.94V16.98C99.8624 17.6467 99.4091 18.1733 98.7958 18.56C98.1824 18.9467 97.4491 19.14 96.5958 19.14C95.6758 19.14 94.8491 18.9133 94.1158 18.46C93.3958 17.9933 92.8224 17.3267 92.3958 16.46C91.9824 15.5933 91.7758 14.58 91.7758 13.42C91.7758 12.2467 91.9824 11.2333 92.3958 10.38C92.8224 9.51333 93.3958 8.85333 94.1158 8.4C94.8491 7.93333 95.6758 7.7 96.5958 7.7ZM97.6958 10.7C96.9624 10.7 96.3691 10.94 95.9158 11.42C95.4758 11.9 95.2558 12.5667 95.2558 13.42C95.2558 14.2733 95.4758 14.94 95.9158 15.42C96.3691 15.9 96.9624 16.14 97.6958 16.14C98.4158 16.14 99.0024 15.8933 99.4558 15.4C99.9224 14.9067 100.156 14.2467 100.156 13.42C100.156 12.58 99.9224 11.92 99.4558 11.44C99.0024 10.9467 98.4158 10.7 97.6958 10.7ZM117.01 7.84V19H113.57V16.98C113.25 17.6333 112.77 18.1533 112.13 18.54C111.504 18.9267 110.77 19.12 109.93 19.12C108.65 19.12 107.63 18.6933 106.87 17.84C106.124 16.9867 105.75 15.8133 105.75 14.32V7.84H109.15V13.9C109.15 14.66 109.344 15.2533 109.73 15.68C110.13 16.0933 110.664 16.3 111.33 16.3C112.024 16.3 112.57 16.08 112.97 15.64C113.37 15.2 113.57 14.5733 113.57 13.76V7.84H117.01ZM122.788 9.94C123.214 9.26 123.761 8.72 124.428 8.32C125.108 7.92 125.841 7.72 126.628 7.72V11.38H125.648C124.741 11.38 124.034 11.5733 123.528 11.96C123.034 12.3467 122.788 13 122.788 13.92V19H119.368V7.84H122.788V9.94ZM139.159 7.84V19H135.719V16.98C135.399 17.6333 134.919 18.1533 134.279 18.54C133.652 18.9267 132.919 19.12 132.079 19.12C130.799 19.12 129.779 18.6933 129.019 17.84C128.272 16.9867 127.899 15.8133 127.899 14.32V7.84H131.299V13.9C131.299 14.66 131.492 15.2533 131.879 15.68C132.279 16.0933 132.812 16.3 133.479 16.3C134.172 16.3 134.719 16.08 135.119 15.64C135.519 15.2 135.719 14.5733 135.719 13.76V7.84H139.159Z" fill="#02073E"/>
<path fillRule="evenodd" clipRule="evenodd" d="M28.433 6.28764C28.4376 6.36938 28.4316 6.45238 28.4112 6.53582L26.5855 13.8681C26.4934 14.2371 26.1637 14.4973 25.7846 14.4995L14.8307 14.5549C14.8293 14.5549 14.828 14.5549 14.8265 14.5549H3.87255C3.49143 14.5549 3.15939 14.2939 3.0674 13.9227L1.24172 6.56247C1.22064 6.47731 1.21462 6.39173 1.21993 6.30787C0.513655 6.08467 0 5.42106 0 4.63918C0 3.67369 0.781697 2.88879 1.74264 2.88879C2.70359 2.88879 3.48529 3.67369 3.48529 4.63918C3.48529 5.18236 3.23731 5.66836 2.84905 5.99004L5.13475 8.30212C5.7125 8.88657 6.51407 9.22203 7.33413 9.22203C8.30388 9.22203 9.22841 8.75928 9.81063 7.98471L13.5671 2.98684C13.2515 2.67031 13.0561 2.23292 13.0561 1.7504C13.0561 0.785303 13.8378 0 14.7987 0C15.7597 0 16.5414 0.785303 16.5414 1.7504C16.5414 2.21832 16.3564 2.64279 16.0573 2.95717C16.0583 2.95847 16.0596 2.95976 16.0605 2.96104L19.7897 7.97268C20.3718 8.75456 21.2996 9.22203 22.2721 9.22203C23.0997 9.22203 23.878 8.8982 24.4632 8.31072L26.7633 6.00079C26.3669 5.67953 26.1122 5.18926 26.1122 4.63918C26.1122 3.67369 26.894 2.88879 27.8549 2.88879C28.8158 2.88879 29.5976 3.67369 29.5976 4.63918C29.5976 5.39998 29.1101 6.04767 28.433 6.28764ZM26.4073 17.1655C26.4073 16.7057 26.0358 16.3324 25.5775 16.3324H4.11231C3.65401 16.3324 3.28242 16.7057 3.28242 17.1655V19.1653C3.28242 19.6259 3.65401 19.9988 4.11231 19.9988H25.5775C26.0358 19.9988 26.4073 19.6259 26.4073 19.1653V17.1655Z" fill="#02073E"/>
</svg>
<div className="flex items-center gap-8 text-primary">
    <h4>Home</h4>
    <h4 className="flex gap-1 items-center">Avertise <ChevronDown size={15}/></h4>
    <h4 className="flex gap-1 items-center">Supports <ChevronDown size={15}/></h4>
    <h4>Contact</h4>
</div>
<button className="text-[#EF9E48] p-2 rounded-md bg-[#ffcf9c85] font-medium text-base">
    Try for Free
</button>
</div>
  )
}

export default Header