const Footer = () => {
  return (
    <>
      <div className="bg-neutral text-neutral-content">
        <footer className="footer p-10  container mx-auto">
          <aside>
            <h1 className="font-bold text-4xl mb-2">Homely</h1>
            <p className="w-[50%]">
              Find Your Perfect Haven with Homely - Your Trusted Real Estate
              Partner. © 2024 Homely. All rights reserved
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Listing</a>
            <a className="link link-hover">Valuation</a>
            <a className="link link-hover">Consultation</a>
            <a className="link link-hover">Investment</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
    //   <div>
    //     <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    //       <aside>
    //         <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
    //       </aside>
    //     </footer>
    //   </div>
  );
};

export default Footer;
