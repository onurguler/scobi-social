import React from 'react';

function Contact() {
  return (
    <div className="min-vh-100">
      <div className="text-center mt-4">
        <h4>Contact Us</h4>
      </div>
      <div class="contact-us mt-4">
        <div class="container">
          <div class="contact-form">
            <div class="row">
              <div class="col-sm-7">
                <form id="ajax-contact">
                  <div class="messages" id="form-messages"></div>
                  <div class="controls">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_name">Name *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Enter your firstname."
                            required="required"
                            data-error="Firstname is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_lastname">Surname *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            class="form-control"
                            placeholder="Enter your surname."
                            required="required"
                            data-error="Lastname is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Please enter your email."
                            required="required"
                            data-error="Valid email is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_phone">Phone *</label>
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            class="form-control"
                            placeholder="Please enter your phone."
                            required
                            oninvalid="setCustomValidity('Plz enter your correct phone number ')"
                            onchange="try{setCustomValidity('')}catch(e){}"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Please enter your message."
                            rows="4"
                            required="required"
                            data-error="Please,leave us a message."></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <input
                          type="submit"
                          class="btn btn-primary"
                          value="Submit"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <br />
                        <small class="text-muted">
                          <strong>*</strong> These fields are required.
                        </small>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-sm-5">
                <div class="row">
                  <div class="col-xs-3">
                    <i class="fa fa-map-marker font-xl"></i>  
                  </div>
                  <div class="col-xs-9 px-2">
                    Suleyman Demirel Cd., 32260 Merkez/Isparta
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-3 mt-3">
                    <i class="fa fa-envelope"></i>   Email
                  </div>
                  <div class="col-sm-9">
                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>{' '}
                    <br />{' '}
                    <a href="mailto:support@yourdomain.com">
                      support@yourdomain.com
                    </a>
                  </div>
                </div>
                <br />
                <iframe
                  title="abc"
                  width="100%"
                  height="250"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=s%C3%BCleyman%20demirel%20%C3%BCniversitesi&t=&z=13&ie=UTF8&iwloc=&output=embed">
                  >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
