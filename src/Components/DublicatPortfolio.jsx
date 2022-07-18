import React from 'react';
import PortfolioImage from './PortfolioImage';


function DublicatPortfolio() {
    const PortfolioData2 = [ 'Minimal Design' , 'Mobile Apps Design', 'Colorful Design', 'Landing Page Desig']

    const SuccessData2 = [
      {
        num:"137",
        class:"small-card my-2",
        title:"PROJECT DONE",
      },
      {
        num:"47",
        class:"small-card small-card1 my-2",
        title:"HAPPY CLIENT",
      },
      {
        num:"34",
        class:"small-card small-card2 my-2",
        title:"RETURN CLIENT",
      },
     ]

  return (
   <>
    <section className='container-fluid portfolioContainer p-5'>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 my-4 mt-5">
          <div className='portfolio-Left-content'>
            <div>
            <h3>Our Portfolio</h3>
           <p>View our portfolio in catagoris</p>
        
        
          <h5 className='mt-5'>All Works</h5>
            {PortfolioData2.map((data,index)=>{
              return(
                <h6 className='my-5' key={index}>{data} </h6>
              )
            })}

          </div>
           

          </div>
          
          
          
         
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 my-3">
         <PortfolioImage/>
         </div>
      </div>
    </section>



    <section className='container-fluid succesContainer my-5 p-5'>

      <div className="row">
        <h3>Our Succes</h3>
        <p>View our portfolio in catagoris</p>
        <div className='row my-5 mx-4'>
          {SuccessData2.map((data,index)=>{
            return(
              <div className="col my-2" key={index}>
              <div className="card" style={{"width":"16rem"}}>
              <div className="card-body my-2">
                <div className={data.class}><h3>{data.num}</h3></div>
                <h6 className="card-title my-2 mt-4">{data.title}</h6>
                
                
              </div>
            </div>
              </div>

            )
          })}
 
</div>
      </div>
      

    </section>
   </>
  )
}

export default DublicatPortfolio