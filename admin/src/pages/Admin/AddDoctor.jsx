import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form>
      <p>Add Doctor</p>
      <div>
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>
        <div>
          <div>
            <div>
              <p>Your Name</p>
              <input placeholder="Enter your name" type="text" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
