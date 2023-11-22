import type { NextPage } from 'next';
import Link from 'next/link';



const Header = () => {
  	return (
    		<div style={{position: "relative", backgroundColor: "#fafafa", width: "100%", height: "823px", overflow: "hidden", textAlign: "left", fontSize: "58px", color: "#252b42", fontFamily: "Martel",}}>
      			<div style={{position: "absolute", width: "100%", top: "0px", right: "0px", left: "0px", height: "823px",}}>
        				<img style={{position: "absolute", width: "100%", top: "0px", right: "0px", left: "0px", maxWidth: "100%", overflow: "hidden", height: "823px", objectFit: "cover",}}src="../assets/img/cover.png" />
        				<div style={{position: "absolute", width: "100%", top: "0px", right: "0px", left: "0px", height: "823px", overflow: "hidden",}} />
      			</div>
      			<div style={{position: "absolute", top: "104px", left: "calc(50% - 525px)", width: "1050px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "50px 0px", boxSizing: "border-box",}}>
        				<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "120px",}}>
          					<div style={{width: "600px", overflow: "hidden", flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: "35px",}}>
            						<div style={{position: "relative", letterSpacing: "0.2px", lineHeight: "65px", fontWeight: "800", display: "inline-block", width: "693px",}}>Help to reclaim your life and freedom</div>
            						<div style={{position: "relative", fontSize: "20px", letterSpacing: "0.2px", lineHeight: "30px", fontWeight: "500", fontFamily: "Montserrat", color: "#737373",}}>
              							<p >{`We know how large objects will act, but things on a `}</p>
              							<p >small scale.</p>
            						</div>

                        
                        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: "10px", textAlign: "center", fontSize: "14px", color: "#fff", fontFamily: "'Open Sans'",}}>
              							<button style={{borderRadius: "37px", backgroundColor: "#784f33", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "10px 36px",}}>
                								<b style={{position: "relative", letterSpacing: "0.2px", lineHeight: "28px", color: "#fff"}}>Get Quote Now</b>
              							</button>
              							<button style={{borderRadius: "37px",  overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "10px 36px", color: "#784f33",}}>
                								<b style={{position: "relative", letterSpacing: "0.2px", lineHeight: "28px",}}>Learn More</b>
              							</button>
            						</div>
          					</div>

<div style={{ width: "330px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", textAlign: "center", fontSize: "14px", fontFamily: "'Open Sans'" }}>
      <form style={{ borderRadius: "10px", backgroundColor: "#fff", width: "328px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "40px", boxSizing: "border-box", gap: "40px" }}>
        <b style={{ position: "relative", fontSize: "24px", letterSpacing: "0.1px", lineHeight: "32px", fontFamily: "Martel" }}>Book Appointment</b>
        <div style={{ alignSelf: "stretch", borderRadius: "1px", backgroundColor: "#fff", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: "5px", textAlign: "left" }}>
          <div style={{ alignSelf: "stretch", position: "relative", height: "91px" }}>
            <b style={{ position: "absolute", top: "0px", left: "0px", letterSpacing: "0.2px", lineHeight: "24px" }}>Name*</b>
            <input type="text" placeholder="Full Name" style={{ position: "absolute", width: "calc(100% - 3px)", top: "34px", right: "0.5px", left: "2.5px", height: "50px", overflow: "hidden", color: "#737373", fontFamily: "Montserrat", borderRadius: "5px", backgroundColor: "#f9f9f9", border: "1px solid #bdbdbd", boxSizing: "border-box", paddingLeft: "21px", fontSize: "14px" }} />
          </div>
          <div style={{ alignSelf: "stretch", position: "relative", height: "91px" }}>
            <b style={{ position: "absolute", top: "0px", left: "0px", letterSpacing: "0.2px", lineHeight: "24px" }}>Email*</b>
            <input type="email" placeholder="example@gmail.com" style={{ position: "absolute", width: "calc(100% - 3px)", top: "34px", right: "0.5px", left: "2.5px", height: "50px", overflow: "hidden", color: "#737373", fontFamily: "Montserrat", borderRadius: "5px", backgroundColor: "#f9f9f9", border: "1px solid #bdbdbd", boxSizing: "border-box", paddingLeft: "21px", fontSize: "14px" }} />
          </div>
          <div style={{ alignSelf: "stretch", position: "relative", height: "86px" }}>
            <b style={{ position: "absolute", top: "0px", left: "0.5px", letterSpacing: "0.2px", lineHeight: "24px" }}>Department *</b>
            <select style={{ position: "absolute", width: "calc(100% - 3px)", top: "34px", right: "0.5px", left: "2.5px", height: "50px", overflow: "hidden", color: "#737373", fontFamily: "Montserrat", borderRadius: "5px", backgroundColor: "#f9f9f9", border: "1px solid #bdbdbd", boxSizing: "border-box", paddingLeft: "21px", fontSize: "14px" }}>
              <option>Please Select</option>
              {/* Agrega opciones*/}
            </select>
          </div>
          <div style={{ alignSelf: "stretch", position: "relative", height: "86px" }}>
            <b style={{ position: "absolute", top: "0px", left: "0.5px", letterSpacing: "0.2px", lineHeight: "24px" }}>Time *</b>
            <select style={{ position: "absolute", width: "calc(100% - 3px)", top: "34px", right: "0.5px", left: "2.5px", height: "50px", overflow: "hidden", color: "#737373", fontFamily: "Montserrat", borderRadius: "5px", backgroundColor: "#f9f9f9", border: "1px solid #bdbdbd", boxSizing: "border-box", paddingLeft: "21px", fontSize: "14px" }}>
              <option>4:00 Available</option>
              {/* Agrega opciones */}
            </select>
          </div>
        </div>
        <button style={{ alignSelf: "stretch", borderRadius: "5px", backgroundColor: "#295c7a", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "15px 40px", color: "#fff" }}>
          <b style={{ position: "relative", letterSpacing: "0.2px", lineHeight: "28px" }}>Book Appointment</b>
        </button>
      </form>
    </div>
      			<div style={{position: "absolute", top: "0px", left: "calc(50% - 661px)", width: "1322px", height: "104px", overflow: "hidden", fontSize: "24px",}}>
        				<div style={{position: "absolute", top: "calc(50% - 29px)", left: "calc(50% - 525px)", width: "187px", height: "58px", overflow: "hidden",}}>
          					<b style={{position: "absolute", top: "13px", left: "0px", letterSpacing: "0.1px", lineHeight: "32px",}}>Litigade</b>
        				</div>
        				<img style={{position: "absolute", top: "45px", left: "calc(50% + 637px)", width: "24px", height: "13.71px", overflow: "hidden",}} alt="" src="navbar-toggler.svg" />
        				<div style={{ position: "absolute", top: "40px", left: "calc(50% + 124px)", width: "373px", height: "24px", overflow: "hidden", textAlign: "center", fontSize: "14px", color: "#737373", fontFamily: "'Open Sans'" }}>
  <div style={{ position: "absolute", top: "calc(50% - 12px)", left: "calc(50% - 186.5px)", overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "21px" }}>
    <Link href="/home" style={{ position: "relative", width: "45px", height: "24px", overflow: "hidden", flexShrink: "0", textDecoration: "none", color: "#737373" }}>
      <div style={{ position: "absolute", top: "0px", left: "0px", width: "45px", height: "24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "2.22%", letterSpacing: "0.2px", lineHeight: "24px", fontWeight: "600" }}>Home</div>
      </div>
    </Link>
    <Link href="/product" style={{ position: "relative", width: "60px", height: "24px", overflow: "hidden", flexShrink: "0", textDecoration: "none", color: "#737373" }}>
      <div style={{ position: "absolute", top: "0px", left: "0px", width: "60px", height: "24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "5%", letterSpacing: "0.2px", lineHeight: "24px", fontWeight: "600" }}>Product</div>
      </div>
    </Link>
    <Link href="/pricing" style={{ position: "relative", width: "53px", height: "24px", overflow: "hidden", flexShrink: "0", textDecoration: "none", color: "#737373" }}>
      <div style={{ position: "absolute", top: "0px", left: "0px", width: "53px", height: "24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "3.77%", letterSpacing: "0.2px", lineHeight: "24px", fontWeight: "600" }}>Pricing</div>
      </div>
    </Link>
    <Link href="/contact" style={{ position: "relative", width: "59px", height: "24px", overflow: "hidden", flexShrink: "0", textDecoration: "none", color: "#737373" }}>
      <div style={{ position: "absolute", top: "0px", left: "0px", width: "59px", height: "24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "3.39%", letterSpacing: "0.2px", lineHeight: "24px", fontWeight: "600" }}>Contact</div>
      </div>
    </Link>
  </div>
</div>

        				</div>
      			</div>
            </div>
            </div>
            
    		);
};

export default Header;
