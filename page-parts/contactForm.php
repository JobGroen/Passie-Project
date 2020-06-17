<section class="contactformulier">
    <h3>Contactformulier</h3>

    <form id="contact-form" name="contact-form" id="contact-form" method="POST">
        <input type="text" id="name" name="name" placeholder="Naam*">
        <input type="email" id="email" name="email" placeholder="Email*">
        <input type="tel" id="tel" name="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Telefoonnummer*">
        <input type="text" id="subject" name="subject" placeholder="Onderwerp*">
        <textarea class="form-control" id="message" name="message" rows="8"
            placeholder="Waar wil je het over hebben?*"></textarea>
    </form>
    <div id="status"></div>
    <button id="send-button" type="submit" onclick="validateForm()" class="submit">Verstuur bericht</button>
</section>