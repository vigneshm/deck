import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { UISref } from '@uirouter/react';

import { SETTINGS } from 'core/config';

import './HelpMenu.less';

const DOCS_URL = 'https://spinnaker.io/docs';
const COMMUNITY_URL = 'https://spinnaker.io/community';
const VERSIONS_URL = 'https://www.spinnaker.io/community/releases/versions/';

const Feedback = () =>
  SETTINGS.feedback && SETTINGS.feedback.url ? (
    <Dropdown.Item href={SETTINGS.feedback.url} target="_blank">
      <i className={SETTINGS.feedback.icon || 'fa fa-envelope'} />
      &nbsp; {SETTINGS.feedback.text || 'Send feedback'}
    </Dropdown.Item>
  ) : null;

const AdditionalHelpLinks = () =>
  SETTINGS.additionalHelpLinks && SETTINGS.additionalHelpLinks.length ? (
    <>
      {SETTINGS.additionalHelpLinks.map((helpLink, i) => (
        <Dropdown.Item href={helpLink.url} key={i} target="_blank">
          {helpLink.icon ? (
            <span>
              <i className={helpLink.icon} /> &nbsp;
            </span>
          ) : null}
          {helpLink.text || `Additional Help`}
        </Dropdown.Item>
      ))}
    </>
  ) : null;

const Version = () => {
  if (!SETTINGS.version) {
    return null;
  }

  const CHANGELOG_PATH = `${SETTINGS.version.replace(/\./g, '-')}-changelog`;
  const CHANGELOG_URL = `${VERSIONS_URL}${CHANGELOG_PATH}`;

  return (
    <Dropdown.Item href={CHANGELOG_URL} target="_blank">
      Spinnaker {SETTINGS.version}
    </Dropdown.Item>
  );
};

export const HelpMenu = () => {
  return (
    <li className="help-menu">
      <Dropdown id="help-menu-dropdown" alignRight={true}>
        <Dropdown.Toggle className="hidden-lg">
          <BsFillQuestionCircleFill />
        </Dropdown.Toggle>
        <Dropdown.Menu as="ul">
          <Feedback />
          <AdditionalHelpLinks />
          <Dropdown.Item href={DOCS_URL} target="_blank">
            Docs
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href={COMMUNITY_URL} target="_blank">
            Community Resources
          </Dropdown.Item>
          <Version />
          {SETTINGS.feature.pagerDuty && (
            <li role="presentation">
              <UISref to="home.page">
                <a className="clickable">
                  <span className="feedback-item-label">Send a Page</span>
                </a>
              </UISref>
            </li>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="help-menu-dropdown-large" alignRight={true}>
        <Dropdown.Toggle className="hidden-xs hidden-sm hidden-md">
          <BsFillQuestionCircleFill /> Help
        </Dropdown.Toggle>
        <Dropdown.Menu as="ul">
          <Feedback />
          <AdditionalHelpLinks />
          <Dropdown.Item href={DOCS_URL} target="_blank">
            Docs
          </Dropdown.Item>
          <Dropdown.Item href={COMMUNITY_URL} target="_blank">
            Community Resources
          </Dropdown.Item>
          <Version />
          {SETTINGS.feature.pagerDuty && (
            <li role="presentation">
              <UISref to="home.page">
                <a className="clickable">
                  <span className="feedback-item-label">Send a Page</span>
                </a>
              </UISref>
            </li>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
};
