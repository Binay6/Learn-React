import React from "react";
import "../src/index.css" ;

const card  = ({username = 'Binay' , post = 'Not Assigned Yet'})=> {
    return(
        <>
        <div className="flex justify-center">
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 max-w-sm">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://th.bing.com/th/id/OIP.WV-7Ok0PuAP_Pj-kHH5l7AHaEo?w=1920&h=1200&rs=1&pid=ImgDetMain"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. Its easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username} </div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
      </div>

      <br></br>
        </>
    ) ;
}

export default card