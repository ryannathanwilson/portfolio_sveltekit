<div id="contact" class="section">
  <h1>Contact</h1>
  <form name="contact" method="post" action="/thankyou/" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label for="bot">
        Don't fill this out:{' '}
        <input id="bot" name="bot-field" />
      </label>
    </p>
    <p>
      <label for="name">
        Your name:
        <br />
        <input id="name" type="text" name="name" />
      </label>
    </p>
    <p>
      <label for="email">
        Your email:
        <br />
        <input id="email" type="email" name="email" />
      </label>
    </p>
    <p>
      <label for="message">
        Message:
        <br />
        <textarea id="message" name="message" />
      </label>
    </p>
    <button type="submit">Send</button>
  </form>
</div>

<style lang="scss">
  form {
    margin: auto;
    padding: 2rem;
    width: 500px;
    @media (max-width: 480px) {
      width: 100%;
      flex-direction: column;
    }
    p {
      text-align: left;
      margin-bottom: 0.5rem;
    }
    label {
      color: rgb(150, 150, 150);
    }
    input,
    textarea {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1em;
      padding: 0.3em 0.5em;
      width: 100%;
      resize: vertical;
      border-radius: 0.3em;
      border-color: rgb(200, 200, 200);
      border-image: none;
      border-style: solid;
      border-width: 1px;
    }
    textarea {
      height: 150px;
    }
    button {
      box-sizing: border-box;
      text-align: center;
      display: block;
      padding: 0.8rem 2em;
      font-size: 1.5em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      background-color: var(--dark);
      color: white;
      width: 100%;
      border: none;
      margin: auto;
      transition: 150ms;
      cursor: pointer;
      &:hover {
        background-color: var(--darkest);
      }
    }
  }
</style>
