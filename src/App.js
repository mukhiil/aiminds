import "./App.css";
import Header from "./components/Header";
import MiddleCard from "./components/Middle-Card";
import ServiceCard from "./components/Service-Card";
import logo1 from "./mid-pic-1.jpeg";
import logo2 from "./mid-pic-2.jpeg";
import logo3 from "./mid-pic-3.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="purple-strip"></div>
      <div className="landing">
        <div className="landing-left">
          <h1 className="title">
            Hire Trained <br></br> Candidates Quickly <br></br> From Us
          </h1>

          <h4>
            Connect with us to explore our candidate pool who <br></br>
            are trained in Tech Companies' Emerging Tech skill <br></br>
            requirements like ML, AI, AR based hands on <br></br>
            projects.
          </h4>

          <div className="our-portfolio">Our Portfolio</div>
        </div>
        <div className="landing-right"></div>
      </div>

      <div className="middle">
        <div className="middle-buffer"></div>
        <MiddleCard
          title="Explore Our Candidate Pool"
          content="Our candidates are trained in emerging AR and ML skills tech companies are searching for"
          image={logo1}
        />
        <MiddleCard
          title="Hire Candidates"
          content="Hire candidates on contract or part time and convert them to full time employees when you want to!"
          image={logo2}
        />
        <MiddleCard
          title="Outsource Your Development"
          content="Outsoruce your development to us and we take care of the rest!"
          image={logo3}
        />
      </div>

      <div className="our-services">
        <h1 className="title">Our Services</h1>
        <div className="our-services-row-1">
          <ServiceCard
            title="Outsource Your Development"
            content="Completely outsource your Software Development/Digital Marketing projects to us."
          ></ServiceCard>
          <ServiceCard
            title="Hire Trained Candidates"
            content="Explore and hire our candidates trained in Tech Companies' Emerging Tech skill requirements like ML, AI, AR based hands on projects."
          ></ServiceCard>
          <ServiceCard
            title="Flexible Hiring"
            content="You could hire candidates for contract and part time with us. Convert them to full time employees anytime."
          ></ServiceCard>
        </div>

        <div className="our-services-row-2">
          <ServiceCard
            title="Transparent Pricing"
            content="Outsoruce your development to us and we take care of the rest!"
          ></ServiceCard>
          <ServiceCard
            title="Consultancy Services"
            content="Consultancy services to enhance your Business' Digital Services capabilities to your customers."
          ></ServiceCard>
          <ServiceCard
            title="Offset Hiring Costs"
            content="In selected cases for hiring Canadian candidates, we also provide possible Government grants you could use to offset your hiring costs."
          ></ServiceCard>
        </div>


      </div>
    </div>
  );
}

export default App;
