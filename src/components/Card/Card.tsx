/**
 * Card
 *
 * Card component for displaying service provider information.
 */

// #region ========================= IMPORTS ===================================
// #region ------------ 3rd-Party Components / Libraries -----------------------
import {
  faClock,
  faDirections,
  faLocationDot,
} from '@fortawesome/pro-regular-svg-icons';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import {
  StyledCard,
  StyledCardTitle,
  StyledIconField,
  StyledLabel,
  StyledOutlinedLink,
  StyledOfferingSpan,
  StyledRow,
  StyledTitleRow,
  StyledLabelRow,
  StyledTooltipContainer,
} from './Card.styles';
import Tooltip from './Tooltip';
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from './Card.types';
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED COMPONENT ==============================
const Card = ({ category, selected, serviceProvider }: Props) => {
  // #region ------------------ Hooks (Resources) ------------------------------
  /** Internationalization translation function */
  const { t } = useTranslation();
  // #endregion --------------- Hooks (Resources) ------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    // (TH) TODO: Add 'selected' class when selected
    <StyledCard $category={category} $selected={selected}>
      <StyledTitleRow>
        <StyledCardTitle className="bold">
          {serviceProvider.name}
        </StyledCardTitle>
        {serviceProvider.hours && (
          <StyledIconField>
            <FontAwesomeIcon className="icon-light" icon={faClock} />{' '}
            <p className="smallText">{serviceProvider.hours}</p>
          </StyledIconField>
        )}
      </StyledTitleRow>
      <address>
        {serviceProvider.address && (
          <StyledIconField className="addr">
            <FontAwesomeIcon className="icon-light" icon={faLocationDot} />{' '}
            <p className="smallText">{serviceProvider.address}</p>
          </StyledIconField>
        )}
        <StyledRow as="ul">
          {serviceProvider.address && (
            <li>
              <StyledOutlinedLink
                href={`https://www.google.com/maps/dir//${encodeURIComponent(
                  serviceProvider.address,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t(
                  'Service Provider Card.Directions Link Label',
                )} ${serviceProvider.name}`}
              >
                <FontAwesomeIcon icon={faDirections} />
                <span>{t('Service Provider Card.Directions Link Label')}</span>
              </StyledOutlinedLink>
            </li>
          )}
          {serviceProvider.website && (
            <li>
              <StyledOutlinedLink
                href={serviceProvider.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('Service Provider Card.Website Link Label')} ${
                  serviceProvider.name
                }`}
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>{t('Service Provider Card.Website Link Label')}</span>
              </StyledOutlinedLink>
            </li>
          )}
          {serviceProvider.email && (
            <li>
              <StyledOutlinedLink href={`mailto:${serviceProvider.email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span> {t('Service Provider Card.Email Link Label')} </span>
              </StyledOutlinedLink>
            </li>
          )}
          {serviceProvider.phone && (
            <li>
              <StyledOutlinedLink href={`tel:${serviceProvider.phone}`}>
                <FontAwesomeIcon icon={faPhone} />
                <span>{serviceProvider.phone}</span>
              </StyledOutlinedLink>
            </li>
          )}
        </StyledRow>
      </address>

      {/* List of subcategories relevant to primary category */}
      {/* Only render if primary category selected */}
      {category !== undefined && (
        <StyledRow>
          <p>
            <StyledLabel>
              {t('Service Provider Card.Selected Category List Label', {
                category: t(`Category Names.${category}`),
              })}
            </StyledLabel>
            {serviceProvider.services[`${category}`]?.map((key) => (
              <StyledOfferingSpan key={key}>
                {t(`Category Names.${key}`)}
              </StyledOfferingSpan>
            ))}
          </p>
        </StyledRow>
      )}
      {/* Tooltips for primary categories that are not selected */}
      {/* Do not render if none exist */}
      {Object.entries(serviceProvider.services).some(
        ([categoryKey, subcategoryKeys]) =>
          categoryKey !== category && subcategoryKeys.length > 0,
      ) && (
        <StyledLabelRow>
          <StyledLabel as="p">
            {t('Service Provider Card.Other Categories List Label')}
          </StyledLabel>
          <StyledTooltipContainer>
            {Object.entries(serviceProvider.services).map(
              ([categoryKey, subcategoryKeys]) =>
                categoryKey !== category &&
                subcategoryKeys.length > 0 && (
                  <Tooltip category={categoryKey} key={categoryKey}>
                    <p>
                      {subcategoryKeys.map((key) => (
                        <StyledOfferingSpan key={key}>
                          {t(`Category Names.${key}`)}
                        </StyledOfferingSpan>
                      ))}
                    </p>
                  </Tooltip>
                ),
            )}
          </StyledTooltipContainer>
        </StyledLabelRow>
      )}
    </StyledCard>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Card;
// #endregion ================ EXPORTED COMPONENT ==============================
