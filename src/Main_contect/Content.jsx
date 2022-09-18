import "./Content.css";

const Content = () => {
  return (
  <section id="content">
    <textarea name="input_text1" id="input_text1_id" cols="100" rows="40" placeholder="Enter your text"></textarea>
    <input type="submit" value="Clear" />
  </section>
  );
};
export default Content;
