const nodeHtmlToImage = require('node-html-to-image')

nodeHtmlToImage({
    output: './image.png',
    html: `<html>
    <head>
      <style>
        body {
          height: 842px;
          width: 595px;
          /* to centre page on screen*/
          margin-left: auto;
          margin-right: auto;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <div style="display: flex; flex-direction: row">
        <img
          src="https://www.uaar.edu.pk/images/logo.png"
          style="width: 100px; height: 100px"
          alt="asdasdasdas"
        />
        <h2 style="margin: auto">
          TRANSPORT REQUISITION SLIP<br /><br />
          BY DEPARTMENT _____________________
        </h2>
      </div>
      <div
        style="
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <h5 >Name/Designation : <h5 style="text-decoration: underline;">Abdullah</h5></h5>
        <h5>Signature:_____________________</h5>
      </div>
      <div>
        <h5>Place Of Visit:_________________________________________________</h5>
      </div>
      <div
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <h5>Date:_________</h5>
        <h5>Time:_________</h5>
        <h5>Time To:_________</h5>
      </div>
      <div style="width: 100%">
        <h2 style="margin: auto; width: fit-content; margin-top: 20px">
          Recommendation Of Chairmain/Incharge
        </h2>
      </div>
      <div
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <h5>Slip Serial Of Date:___________</h5>
        <h5>Signature:___________</h5>
        <h5>Stamp:___________</h5>
      </div>
      <div style="margin-top:30px;display: flex; flex-direction: row; justify-content: space-between">
          <h3>
            Principle Officer Transport<br/><br/>
            (&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;Stamp&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;)
          </h3>
          <h3>
              Approved / Not Approved
          </h3>
        </div>
        <div
        style="
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <h5>Name Of Driver:_____________________</h5>
        <h5>Signature:_____________________</h5>
      </div>
      <div
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <h5>Vehicle No:_________</h5>
      <h5>Start Meter:_________</h5>
      <h5>End Meter:_________</h5>
    </div>
    <div
    style="
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    "
  >
    <h5>Transport Officer:_____________________</h5>
    <h5>Stamp:_____________________</h5>
  </div>
    </body>
  </html>
  
  `
})
    .then(() => console.log('The image was created successfully!'))