import React, { useState } from 'react';

export default function App() {
  const [navExpanded, setNavExpanded] = useState(false);
  const handleToggle = () => setNavExpanded((v) => !v);
  const handleNavClick = () => setNavExpanded(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Header / Navbar */}
      <header className="sticky-top shadow-sm bg-white">
        <nav className="navbar navbar-expand-lg navbar-light bg-white" aria-label="Main Navigation">
          <div className="container-xxl">
            <a className="navbar-brand fw-bold d-flex align-items-center" href="#hero" onClick={handleNavClick}>
              <span className="brand-mark me-2" aria-hidden="true"></span>
              <span>Teacher MDM Portal</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              aria-controls="mainNav"
              aria-expanded={navExpanded}
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse collapse ${navExpanded ? 'show' : ''}`} id="mainNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                <li className="nav-item"><a className="nav-link" href="#hero" onClick={handleNavClick}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about" onClick={handleNavClick}>About MDM</a></li>
                <li className="nav-item"><a className="nav-link" href="#services" onClick={handleNavClick}>Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#reports" onClick={handleNavClick}>Reports</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact" onClick={handleNavClick}>Contact</a></li>
                <li className="nav-item d-lg-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
                  <a className="btn btn-outline-primary me-lg-2 w-100 w-lg-auto" href="#login" onClick={handleNavClick}>Login</a>
                </li>
                <li className="nav-item mt-2 mt-lg-0">
                  <a className="btn btn-success w-100 w-lg-auto" href="#register" onClick={handleNavClick}>Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section position-relative overflow-hidden py-5 py-lg-6">
        <div className="container-xxl position-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-5 fw-bold text-dark mb-3">Simplify Your Mid-Day Meal Management</h1>
              <p className="lead text-secondary mb-4">Record daily meal attendance, track stock, generate monthly consumption bills, and get real-time reports — all in one teacher-friendly portal.</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a href="#login" className="btn btn-primary btn-lg"> <i className="bi bi-box-arrow-in-right me-2"></i>Login to Dashboard</a>
                <a href="#register" className="btn btn-outline-success btn-lg"> <i className="bi bi-person-plus me-2"></i>Register Now</a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-illustration ms-lg-5" aria-hidden="true">
                <div className="hero-card card shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="avatar placeholder me-2"></div>
                      <div className="flex-grow-1">
                        <div className="placeholder-line w-75"></div>
                        <div className="placeholder-line w-50"></div>
                      </div>
                    </div>
                    <div className="placeholder-graph"></div>
                  </div>
                </div>
                <div className="hero-badge card shadow-sm">
                  <div className="card-body py-2 px-3 d-flex align-items-center">
                    <i className="bi bi-graph-up-arrow text-success me-2"></i>
                    <span className="small">Real-time Attendance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape" aria-hidden="true"></div>
      </section>

      {/* About MDM */}
      <section id="about" className="section">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="h1 fw-bold text-center mb-3">About the Mid-Day Meal (MDM) Scheme</h2>
              <p className="lead text-center text-secondary mb-5">MDM supports students' nutrition and learning by providing meals during school hours. This portal helps teachers focus on students by simplifying data entry, tracking, and reporting.</p>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="d-flex">
                    <div className="icon-circle me-3"><i className="bi bi-heart text-success"></i></div>
                    <div>
                      <h5 className="mb-1">Student Well-being</h5>
                      <p className="text-secondary mb-0">Keep accurate attendance for meals to ensure every student is cared for.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex">
                    <div className="icon-circle me-3"><i className="bi bi-clipboard-check text-primary"></i></div>
                    <div>
                      <h5 className="mb-1">Compliance Made Easy</h5>
                      <p className="text-secondary mb-0">Generate monthly consumption bills and submit reports with confidence.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex">
                    <div className="icon-circle me-3"><i className="bi bi-people text-info"></i></div>
                    <div>
                      <h5 className="mb-1">Built for Teachers</h5>
                      <p className="text-secondary mb-0">Multi-teacher access and simple workflows fit your school environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-light">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="col">
              <h2 className="h1 fw-bold text-center mb-3">Services</h2>
              <p className="text-center text-secondary">Everything you need to manage MDM efficiently.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-primary-subtle text-primary"><i className="bi bi-check2-square"></i></div>
                  <h5 className="mt-3">Daily Meal Attendance Entry</h5>
                  <p className="text-secondary mb-0">Quickly record daily attendance for each class section and meal type.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-success-subtle text-success"><i className="bi bi-file-earmark-text"></i></div>
                  <h5 className="mt-3">Monthly Consumption Bill Generation</h5>
                  <p className="text-secondary mb-0">Automatically calculate and format bills ready for departmental submission.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-info-subtle text-info"><i className="bi bi-graph-up-arrow"></i></div>
                  <h5 className="mt-3">Real-Time Reports</h5>
                  <p className="text-secondary mb-0">Monitor trends with up-to-date summaries and simple charts.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-warning-subtle text-warning"><i className="bi bi-cloud-arrow-down"></i></div>
                  <h5 className="mt-3">Data Backup (Excel/PDF)</h5>
                  <p className="text-secondary mb-0">Export your data to Excel or PDF for safe record-keeping and audits.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-secondary-subtle text-secondary"><i className="bi bi-people"></i></div>
                  <h5 className="mt-3">Multi-Teacher Access</h5>
                  <p className="text-secondary mb-0">Invite staff and assign roles to share responsibilities securely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="col">
              <h2 className="h1 fw-bold text-center mb-3">How It Works</h2>
              <p className="text-center text-secondary">Four simple steps to streamline your MDM workflow.</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="hiw-step h-100">
                <div className="step-circle">1</div>
                <h6 className="mt-3 mb-1">Register</h6>
                <p className="text-secondary mb-0">Create your school account and add fellow teachers.</p>
              </div>
            </div>
            <div className="col">
              <div className="hiw-step h-100">
                <div className="step-circle">2</div>
                <h6 className="mt-3 mb-1">Enter Data</h6>
                <p className="text-secondary mb-0">Record daily attendance and stock movements with ease.</p>
              </div>
            </div>
            <div className="col">
              <div className="hiw-step h-100">
                <div className="step-circle">3</div>
                <h6 className="mt-3 mb-1">Generate Reports</h6>
                <p className="text-secondary mb-0">Create monthly consumption bills and summaries.</p>
              </div>
            </div>
            <div className="col">
              <div className="hiw-step h-100">
                <div className="step-circle">4</div>
                <h6 className="mt-3 mb-1">Submit to Department</h6>
                <p className="text-secondary mb-0">Export to Excel/PDF and share with authorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Preview */}
      <section id="demo" className="section bg-light">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="col">
              <h2 className="h1 fw-bold text-center mb-3">Demo Preview</h2>
              <p className="text-center text-secondary">A glimpse of the dashboard, charts, and reports.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="preview-box">
                <div className="preview-label">Dashboard</div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="preview-box">
                <div className="preview-label">Charts</div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="preview-box">
                <div className="preview-label">Reports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section id="reports" className="section">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="col">
              <h2 className="h1 fw-bold text-center mb-3">Reports</h2>
              <p className="text-center text-secondary">Ready-made summaries you can export and submit.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-info-subtle text-info"><i className="bi bi-clipboard-data"></i></div>
                  <h5 className="mt-3 mb-2">Attendance Summary</h5>
                  <ul className="text-secondary mb-3 ps-3">
                    <li>Daily/Monthly totals</li>
                    <li>Class-wise breakdown</li>
                    <li>Absentee tracking</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm">View Sample</a>
                    <a href="#" className="btn btn-outline-success btn-sm">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-warning-subtle text-warning"><i className="bi bi-box-seam"></i></div>
                  <h5 className="mt-3 mb-2">Stock Usage &amp; Ledger</h5>
                  <ul className="text-secondary mb-3 ps-3">
                    <li>Opening vs. closing stock</li>
                    <li>Issue and receipt logs</li>
                    <li>Threshold alerts</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm">View Sample</a>
                    <a href="#" className="btn btn-outline-success btn-sm">Download Excel</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 card-lift">
                <div className="card-body">
                  <div className="service-icon bg-success-subtle text-success"><i className="bi bi-receipt"></i></div>
                  <h5 className="mt-3 mb-2">Monthly Consumption Bill</h5>
                  <ul className="text-secondary mb-3 ps-3">
                    <li>Auto-calculated quantities</li>
                    <li>Per-student cost summary</li>
                    <li>Department-ready format</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm">View Sample</a>
                    <a href="#" className="btn btn-outline-success btn-sm">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="section section-cta text-white">
        <div className="container-xxl">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-2">Join Hundreds of Teachers Managing MDM Effortlessly</h2>
              <p className="lead mb-0">Get started in minutes. No training required.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#register" className="btn btn-light btn-lg text-primary fw-semibold">Register Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Login & Registration Forms */}
      <section id="forms" className="section">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="col">
              <h2 className="h1 fw-bold text-center mb-3">Access Your Account</h2>
              <p className="text-center text-secondary">Use the forms below to login or create a new account.</p>
            </div>
          </div>
          <div className="row g-4 align-items-stretch">
            {/* Login */}
            <div className="col-12 col-lg-5">
              <div id="login" className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3"><i className="bi bi-box-arrow-in-right me-2 text-primary"></i>Login</h5>
                  <form action="" method="post" className="needs-validation" noValidate>
                    <input type="hidden" name="form_type" value="login" />
                    <div className="mb-3">
                      <label htmlFor="loginEmail" className="form-label">Email</label>
                      <input type="email" className="form-control" id="loginEmail" name="email" placeholder="name@school.edu" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">Password</label>
                      <input type="password" className="form-control" id="loginPassword" name="password" placeholder="••••••••" required />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="1" id="rememberMe" name="remember" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                      <a href="#" className="small">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </form>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
              <div className="divider my-3 my-lg-0">or</div>
            </div>

            {/* Register */}
            <div className="col-12 col-lg-5">
              <div id="register" className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3"><i className="bi bi-person-plus me-2 text-success"></i>Register</h5>
                  <form action="" method="post" className="needs-validation" noValidate>
                    <input type="hidden" name="form_type" value="register" />
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="fullName" name="full_name" placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="registerEmail" className="form-label">Email</label>
                      <input type="email" className="form-control" id="registerEmail" name="email" placeholder="name@school.edu" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="schoolName" className="form-label">School Name</label>
                      <input type="text" className="form-control" id="schoolName" name="school_name" placeholder="School / Institution" required />
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirm_password" required />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="role" className="form-label">Role</label>
                      <select className="form-select" id="role" name="role" required>
                        <option value="" disabled>Choose role…</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Headmaster">Headmaster</option>
                        <option value="Staff">Staff</option>
                      </select>
                    </div>
                    <div className="form-check mt-3 mb-3">
                      <input className="form-check-input" type="checkbox" value="1" id="terms" name="terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="#privacy">Privacy Policy</a> and <a href="#terms">Terms</a>.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Create Account</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer bg-white border-top">
        <div className="container-xxl py-5">
          <div className="row g-4">
            <div className="col-md-5">
              <a className="navbar-brand fw-bold d-flex align-items-center mb-2" href="#hero" onClick={handleNavClick}>
                <span className="brand-mark me-2" aria-hidden="true"></span>
                <span>Teacher MDM Portal</span>
              </a>
              <p className="text-secondary mb-2">Helping schools manage Mid-Day Meals with ease.</p>
              <p className="mb-0">
                <a href="mailto:support@mdm-portal.example" className="text-decoration-none">
                  <i className="bi bi-envelope me-2"></i>support@mdm-portal.example
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h6 className="fw-semibold mb-2">Support</h6>
              <ul className="list-unstyled mb-0">
                <li><a href="#" className="link-secondary text-decoration-none">Help Center</a></li>
                <li><a href="#" className="link-secondary text-decoration-none">Status</a></li>
                <li><a href="#" className="link-secondary text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-semibold mb-2">Legal</h6>
              <ul className="list-unstyled mb-0">
                <li><a id="privacy" href="#" className="link-secondary text-decoration-none">Privacy Policy</a></li>
                <li><a id="terms" href="#" className="link-secondary text-decoration-none">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-top mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between">
            <span className="small text-secondary">© {currentYear} Teacher MDM Portal. All rights reserved.</span>
            <a href="#hero" className="small text-decoration-none">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}