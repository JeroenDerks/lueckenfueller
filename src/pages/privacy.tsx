import { NavBar } from "@/components/NavBar";
import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

// This is the English privacy statement page. There is also a German version at datenschutzerklarung.tsx
export default function PrivacyEnglish() {
  const router = useRouter();

  useEffect(() => {
    if (router.locale === "de") router.push("/datenschutzerklarung");
  }, [router]);

  return (
    <>
      <NavBar />
      <PageLayout backgroundColor={theme.palette.primary.main}>
        <Box p={2} sx={{ background: "#fafafa", borderRadius: 4 }}>
          <h1>Privacy policy</h1>
          <h2>1. Data protection at a glance</h2>
          <h3>General information</h3>
          <p>
            The following information provides a simple overview of what is done
            with your personal data. happens when you visit this website.
            Personal data is any data that you use to personally identifiable.
            Detailed information on the topic of data protection can be found
            Privacy Policy listed below this text.
          </p>
          <h3>Data collection on this website</h3>
          <h4>
            Who is responsible for the collection of data on this website?
          </h4>
          <p>
            The data processing on this website is carried out by the website
            operator. Their contact details can be found in the section
            &quot;Note on the Data Controller&quot; in this Privacy Policy.
          </p>
          <h4>How do we collect your data?</h4>
          <p>
            On the one hand, your data is collected when you provide it to us.
            This can be, for example, data that you enter into a contact form.
          </p>
          <p>
            Other data will be processed automatically or with your consent when
            you visit the website by our IT systems. on target. This is mainly
            technical data (e.g. internet browser, operating system or time) of
            the page view). This data is collected automatically as soon as you
            enter this website. What do we use your data for?
          </p>
          <p>
            Part of the data is collected to ensure the error-free provision of
            the website. Other Data can be used to analyze your user behavior.
          </p>
          <h4>What rights do you have regarding your data?</h4>
          <p>
            You have the right at any time to obtain information free of charge
            about the origin, recipient and purpose of your personal data
            stored. You also have the right to request the correction or request
            deletion of this data. If you have given your consent to data
            processing, you can revoke this consent at any time for the future.
            In addition, you have the right to request the restriction of the
            processing of your personal data in certain circumstances.
            Furthermore, you have the right to lodge a complaint with the
            competent supervisory authority. You can contact us at any time for
            this or any other questions you may have about data protection.
          </p>
          <h4>Analytics and third-party tools</h4>
          <p>
            When you visit this website, your surfing behaviour can be
            statistically evaluated. This happens before especially with
            so-called analysis programs.
          </p>
          <p>
            Detailed information on these analysis programs can be found in the
            following Privacy policy.
          </p>
          <h2>2. Hosting</h2>
          <p>
            We host the content of our website with the following providers:
          </p>
          <p>
            <b>IONOS</b>
          </p>
          <p>
            The provider is IONOS SE, Elgendorfer Str. 57, 56410 Montabaur
            (hereinafter referred to as IONOS). If you want to use our When you
            visit your website, IONOS collects various log files, including your
            IP addresses. Details can be found here. IONOS&apos; Privacy Policy:{" "}
            <a href="https://www.ionos.de/terms-gtc/terms-privacy">
              https://www.ionos.de/terms-gtc/terms-privacy
            </a>
            .
          </p>
          <p>
            The use of IONOS is based on Art. 6 (1) (f) GDPR. We have a
            legitimate interest in providing the most reliable presentation of
            our website. To the extent that a consent has been requested, the
            processing is carried out exclusively on the basis of Art. 6 para. 1
            lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent requires
            the storage of cookies or the Access to information in the
            user&apos;s end device (e.g. device fingerprinting) within the
            meaning of the TTDSG comprises. Consent can be revoked at any time.
          </p>
          <h4>Order processing</h4>
          <p>
            We have a data processing agreement (DPA) for the use of the
            above-mentioned service closed. This is a contract required by data
            protection law, which ensures that the personal data of our website
            visitors is only processed in accordance with our instructions and
            in compliance with the GDPR.
          </p>
          <h4>External Hosting</h4>
          <p>
            This website is hosted externally. The personal data collected on
            this website are stored on the servers of the hoster(s). This may
            include, but is not limited to, IP addresses, Contact requests, meta
            and communication data, contract data, contact data, names, website
            accesses and other data generated through a website.
          </p>
          <p>
            The external hosting is carried out for the purpose of fulfilling
            the contract vis-à-vis our potential and existing customers (Art. 6
            (1) (b) GDPR) and in the interest of a secure, fast and efficient
            Provision of our online services by a professional provider (Art. 6
            para. 1 lit. f GDPR). If a corresponding consent has been requested,
            the processing will take place exclusively on basis of Art. 6 (1)
            (a) GDPR and § 25 (1) TTDSG, insofar as consent requires the storage
            of of cookies or access to information in the user&apos;s terminal
            device (e.g. device fingerprinting) in the within the meaning of the
            TTDSG. Consent can be revoked at any time.
          </p>
          <p>
            Our host(s) will or will process your data only to the extent
            necessary to fulfil its and comply with our instructions in relation
            to this data.
          </p>
          <p>We use the following hoster(s):</p>
          <p>
            <b>Vercel Inc.</b>
          </p>
          <p></p>
          <p>440 N Barranca Ave #4133</p>
          <p>Covina, CA 91723</p>
          <h2>3. General information and mandatory information</h2>
          <h3>Privacy</h3>
          <p>
            The operators of these sites take the protection of your personal
            data very seriously. We treat your personal data confidentially and
            in accordance with the statutory data protection regulations, as
            well as of this Privacy Policy.
          </p>
          <p>
            When you use this website, various personal data is collected.
            Personal data is data that can be used to identify you personally.
            The present Privacy Policy explains what data we collect and what we
            use it for. It also explains how and for what purpose this is done.
          </p>
          <p>
            We would like to point out that data transmission on the Internet
            (e.g. when communicating by e-mail) security vulnerabilities. A
            complete protection of the data against access by third parties is
            not possible.
          </p>
          <h4>Note on the responsible body</h4>
          <p>The person responsible for data processing on this website is:</p>
          <p>
            <b>Jeroen Derks & Chris Steinmayer</b>
          </p>
          <p>Dolziger Straße 4</p>
          <p>10247 Berlin</p>
          <p>E-Mail: cs@lueckenfueller.me</p>
          <p>
            The responsible body is the natural or legal person who, alone or
            jointly with others, has the purposes and means of the processing of
            personal data (e.g. names, e-mail addresses, etc.) Decides.
          </p>
          <h4>Storage period</h4>
          <p>
            Insofar as no more specific storage period has been specified in
            this data protection declaration, Your personal data with us until
            the purpose for which the data processing ceases to apply. If you
            have a assert a legitimate request for deletion or revoke consent to
            data processing, your data will be deleted, unless we have other
            legally permissible reasons for storing your data. personal data
            (e.g. retention periods under tax or commercial law); in In the
            latter case, the deletion takes place after these reasons have
            ceased to exist. General information on the legal bases of data
            processing on this website.
          </p>
          <h4>Website</h4>
          <p>
            If you have consented to the processing of your personal data, we
            will process your personal data in the following ways: basis of Art.
            6 (1) (a) GDPR or Art. 9 (2) (a) GDPR, insofar as special categories
            of data pursuant to Art. 9 (1) GDPR. In the case of explicit consent
            to the transfer personal data in third countries, data processing is
            also carried out on the basis of Art. 49 (1) (a) GDPR. If you are
            involved in the storage of cookies or in the access to information
            in your device (e.g. via device fingerprinting), data processing is
            also carried out on the basis of § 25 para. 1 TTDSG. Consent can be
            revoked at any time. Are your data necessary for the fulfilment of a
            contract or for the implementation of pre-contractual measures, we
            process your Data on the basis of Art. 6 (1) (b) GDPR. Furthermore,
            we process your data insofar as it are necessary for the fulfilment
            of a legal obligation on the basis of Art. 6 (1) (c) GDPR. Data
            processing may also be carried out on the basis of our legitimate
            interest pursuant to Art. 6 (1) (f) GDPR. The legal bases relevant
            in each individual case are described in the following paragraphs of
            this Privacy Policy.
          </p>
          <h4>Recipients of personal data</h4>
          <p>
            As part of our business activities, we work together with various
            external bodies. Thereby In some cases, it is also necessary to
            transfer personal data to these external bodies. We only pass on
            personal data to external bodies if this is necessary in the context
            of a performance of a contract is necessary if we are legally
            obliged to do so (e.g. disclosure of data to tax authorities) if we
            have a legitimate interest in the disclosure pursuant to Art. 6 (1)
            (f) GDPR or if there is another legal basis for the transfer of
            data. When using We only share our customers&apos; personal data
            with processors on the basis of a valid Data Processing Agreement.
            In the case of joint processing, a contract for joint processing.
          </p>
          <h4>Withdrawal of your consent to data processing</h4>
          <p>
            Many data processing operations are only possible with your explicit
            consent. You can use a revoke consent already given at any time. The
            lawfulness of the actions carried out prior to the revocation Data
            processing remains unaffected by the revocation.
          </p>
          <p>
            Right to object to the collection of data in special cases, as well
            as to Direct marketing (Art. 21 GDPR) IF THE DATA PROCESSING IS
            CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR YOU HAVE
            THE RIGHT AT ANY TIME, FOR REASONS ARISING FROM YOUR PARTICULAR TO
            OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA TO LODGE AN
            OPPOSITION; THIS SHALL ALSO APPLY TO AN UNDERTAKING BASED ON THESE
            PROVISIONS. PROFILING. THE LEGAL BASIS ON WHICH THE PROCESSING IS
            BASED, PLEASE REFER TO THIS PRIVACY POLICY. IF YOU LODGE AN
            OBJECTION, IF WE WILL NO LONGER PROCESS YOUR PERSONAL DATA
            CONCERNED, IT WILL BE UNLESS WE CAN DEMONSTRATE COMPELLING
            LEGITIMATE GROUNDS FOR THE PROCESSING EVIDENCE WHICH OVERRIDES THEIR
            INTERESTS, RIGHTS AND FREEDOMS, OR WHICH PROCESSING SERVES THE
            ESTABLISHMENT, EXERCISE OR DEFENCE OF LEGAL CLAIMS (OBJECTION
            PURSUANT TO ART. 21 PARA. 1 GDPR). YOUR PERSONAL DATA IS PROCESSED
            FOR THE PURPOSE OF DIRECT MARKETING, SO YOU HAVE THE RIGHT TO OBJECT
            AT ANY TIME TO THE PROCESSING YOU PERSONAL DATA FOR THE PURPOSE OF
            SUCH ADVERTISING TO LODGE; THIS ALSO APPLIES TO PROFILING INSOFAR AS
            IT IS RELATED TO SUCH DIRECT MARKETING IN CONNECTION. IF YOU OBJECT,
            YOUR PERSONAL DATA WILL BE SUBSEQUENTLY NO LONGER USED FOR THE
            PURPOSE OF DIRECT MARKETING (OBJECTION ACCORDING TO ART. 21 PARA. 2
            GDPR).
          </p>
          <h4>
            Right to lodge a complaint with the competent supervisory authority
          </h4>
          <p>
            In the event of violations of the GDPR, data subjects have the right
            to lodge a complaint with a supervisory authority, in particular in
            the Member State of their habitual residence, their place of work or
            the place of the alleged infringement. The right to lodge a
            complaint is without prejudice to any other administrative or
            judicial remedies.
          </p>
          <h4>Right to data portability</h4>
          <p>
            You have the right to request data that we collect on the basis of
            your consent or in performance of a contract. process automatically,
            on its own or to a third party in a common, machine-readable format
            to be handed over. If you wish to request the direct transfer of the
            data to another controller, this will only be done to the extent
            that it is technically feasible.
          </p>
          <h4>Information, correction and deletion</h4>
          <p>
            Within the framework of the applicable legal provisions, you have
            the right to free of charge at any time. Information about your
            stored personal data, its origin and recipients and the Purpose of
            the data processing and, if applicable, a right to rectification or
            deletion of this data. To this end, as well as If you have any
            further questions about personal data, you can contact us at any
            time.
          </p>
          <h4>Right to restriction of processing</h4>
          <p>
            You have the right to request the restriction of the processing of
            your personal data. You can contact us at any time. The right to
            restriction of processing exists in in the following cases:
          </p>
          <ul>
            <li>
              <p>
                If you contest the accuracy of your personal data held by us, we
                need usually time to check this. For the duration of the
                examination, you have the right to Request restriction of
                processing of your personal data.
              </p>
            </li>
            <li>
              <p>
                If the processing of your personal data has been/is unlawful,
                you may request the restriction of data processing instead of
                deletion.
              </p>
            </li>
            <li>
              <p>
                If we no longer need your personal data, but you need it to
                exercise, defence or assertion of legal claims, you have the
                right to take action in lieu of the request the restriction of
                the processing of your personal data.
              </p>
            </li>
            <li>
              <p>
                If you have lodged an objection pursuant to Art. 21 (1) GDPR, a
                balance must be struck between your interests and ours. As long
                as it has not yet been determined whose interests you have the
                right to request the restriction of the processing of your
                personal data to demand.
              </p>
            </li>
            <li>
              <p>
                If you have restricted the processing of your personal data,
                this data may not be processed by their storage – only with your
                consent or for the purpose of asserting, exercising or defence
                of legal claims or for the protection of the rights of another
                natural or legal person or for reasons of important public
                interest of the European Union, or of a Member State.
              </p>
            </li>
          </ul>

          <h4>SSL or TLS encryption</h4>
          <p>
            For security reasons and to protect the transmission of confidential
            content, such as For example, orders or inquiries that you send to
            us as the site operator, SSL or TLS encryption. You can recognize an
            encrypted connection by the fact that the address bar of the browser
            is &quot;http://&quot; changes to &quot;https://&quot; and click on
            the lock icon in your browser line. If SSL or TLS encryption is
            enabled, the data you transmit to us cannot be read by third
            parties.
          </p>
          <h4>Opting Out of Promotional Emails</h4>
          <p>
            The use of contact data published as part of the imprint obligation
            for the purpose of sending Advertising and information materials
            that have not been expressly requested are hereby objected to. The
            Operators of the pages expressly reserve the right to take legal
            action in the event of the unsolicited sending of promotional
            information, such as spam emails.
          </p>
          <h2>4. Data collection on this website</h2>
          <h4>Cookies</h4>
          <p>
            Our website uses so-called &quot;cookies&quot;. Cookies are small
            packets of data and focus on does not cause any damage to your
            device. They will either be temporarily suspended for the duration
            of a session. (session cookies) or permanently (persistent cookies)
            on your device. Session cookies will be automatically deleted at the
            end of your visit. Persistent cookies remain on your device until
            you delete them yourself or until they are automatically deleted by
            your web browser.
          </p>
          <p>
            Cookies can come from us (first-party cookies) or from third-party
            companies (so-called third-party cookies). cookies). Third-party
            cookies enable the integration of certain services provided by
            Third-party companies within websites (e.g. cookies to process
            payment services). Cookies have various functions. Many cookies are
            technically necessary, as certain cookies website functions would
            not work without them (e.g. the shopping cart function or the
            display videos). Other cookies may be used to evaluate user
            behaviour or for advertising purposes. be used.
          </p>
          <p>
            Cookies used to carry out the electronic communication process, to
            provide certain functions requested by you (e.g. for the shopping
            cart function) or to optimize the website (e.g. web audience
            measurement cookies) (necessary cookies), are stored on the basis of
            Art. 6 (1) (f) GDPR, unless another legal basis is specified. The
            website operator has a legitimate interest in storing necessary
            cookies for the technically error-free and optimized provision of
            its services. If consent to the storage of cookies and comparable
            recognition technologies, the Processing exclusively on the basis of
            this consent (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG);
            the consent can be revoked at any time.
          </p>
          <p>
            You can set your browser so that you are informed about the setting
            of cookies and Allow cookies only in individual cases, exclude the
            acceptance of cookies in certain cases or generally as well as the
            automatic deletion of cookies when the browser is closed. In the
            case of the Disabling cookies may limit the functionality of this
            website.
          </p>
          <p>
            You can find out which cookies and services are used on this
            website. Privacy Policy.
          </p>
          <h2>5. Plugins and Tools</h2>
          <h4>YouTube</h4>
          <p>
            This website embeds videos from the YouTube website. The website is
            operated by Google Ireland Limited (&quot;Google&quot;), Gordon
            House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p>
            If you visit one of our websites on which YouTube is integrated, a
            connection to YouTube&apos;s servers. In doing so, the YouTube
            server is informed which of our pages you have visited.
          </p>
          <p>
            Furthermore, YouTube may store various cookies on your device or use
            comparable cookies. Use recognition technologies (e.g., device
            fingerprinting). In this way, YouTube receive information about
            visitors to this website. This information is used, among other
            things: used to collect video statistics, improve the user
            experience, and Prevent fraud.
          </p>
          <p>
            If you are logged in to your YouTube account, you allow YouTube to
            track your surfing behavior directly. Assign to your personal
            profile. You can prevent this by logging out of your YouTube Log out
            of account.
          </p>
          <p>
            The use of YouTube is in the interest of an appealing presentation
            of our online offerings. This constitutes a legitimate interest
            within the meaning of Art. 6 (1) (f) GDPR. Provided that a
            corresponding consent has been requested, the processing is carried
            out exclusively on the basis of Art. 6 (1) (a) GDPR and § 25 para. 1
            TTDSG, insofar as consent requires the storage of cookies or access
            to information in the user&apos;s end device (e.g. device
            fingerprinting) within the meaning of the TTDSG. The Consent can be
            revoked at any time.
          </p>
          <p>
            For more information on how user data is handled, please refer to
            YouTube&apos;s privacy policy under:{" "}
            <a href="https://policies.google.com/privacy?hl=de">
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            The company is certified according to the &quot;EU-US Data Privacy
            Framework&quot; (DPF). The DPF is an agreement between the European
            Union and the United States that provides for compliance with
            European data protection standards for data processing in the USA.
            Each according to The company certified by the DPF is committed to
            complying with these data protection standards. More Information on
            this can be obtained from the provider at the following link:{" "}
            <a
              href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?
contact=true&id=a2zt000000001L5AAI&status=Active "
            >
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?
              contact=true&id=a2zt000000001L5AAI&status=Active
            </a>
          </p>
          <h4>Google Fonts</h4>
          <p>
            This site uses so-called Google Fonts for the uniform display of
            fonts, which are used by Google be provided. When you open a page,
            your browser loads the required fonts into your browser cache, to
            display text and fonts correctly.
          </p>
          <p>
            For this purpose, the browser you are using must connect to
            Google&apos;s servers. record. As a result, Google becomes aware
            that this website can be accessed via your IP address. has been
            invoked. The use of Google Fonts is based on Art. 6 (1) (f) GDPR.
            The Website operator has a legitimate interest in the uniform
            display of the typeface on its website. Website. If a corresponding
            consent has been requested, the processing is carried out
            exclusively on the basis of Art. 6 (1) (a) GDPR and § 25 (1) TTDSG,
            insofar as the consent requires the storage of of cookies or access
            to information in the user&apos;s terminal device (e.g. device
            fingerprinting) in the within the meaning of the TTDSG. Consent can
            be revoked at any time.
          </p>
          <p>
            If your browser does not support Google Fonts, a default font from
            your computer will be used. For more information about Google Fonts,
            see
            <a href="https://developers.google.com/fonts/faq">
              https://developers.google.com/fonts/faq
            </a>{" "}
            and in Google&apos;s privacy policy:
            <a href="https://policies.google.com/privacy?hl=de">
              https://policies.google.com/privacy?hl=de
            </a>
            .{" "}
          </p>
          <p>
            The company is certified according to the &quot;EU-US Data Privacy
            Framework&quot; (DPF). The DPF is an agreement between the European
            Union and the United States that provides for compliance with
            European data protection standards for data processing in the USA.
            Each according to The company certified by the DPF is committed to
            complying with these data protection standards. More Information on
            this can be obtained from the provider at the following link:
            <a
              href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?
contact=true&id=a2zt000000001L5AAI&status=Active"
            >
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?
              contact=true&id=a2zt000000001L5AAI&status=Active
            </a>
          </p>
          <p>
            Source:{" "}
            <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
          </p>
        </Box>
      </PageLayout>
    </>
  );
}
