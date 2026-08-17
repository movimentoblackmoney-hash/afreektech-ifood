// Markup exato exportado do Brevo (Contacts → Forms → form dedicado do iFood → Share → aba
// HTML). Inicialmente o LPIFood reaproveitava o "Form Mover" (mesma lista "Leads Mover") —
// agora tem form e lista próprios ("Leads iFood"), sem os campos Q1/Q2/CPF que eram só herança
// do compartilhamento com o Mover/Petrobras.

export const BREVO_FORM_ACTION_URL =
  "https://b6a6e45a.sibforms.com/serve/MUIFAOnOnLELLq8nO1xi77hf1yZd0cOzX7Ifirt4gxRjwjacyO0RRc65ndhTqdRvyCaafe5BGGZDrzAb3gdq5SzqBLUoDWUrmp7uE6Zg9Td4WdV9c4EtGgwXJb0jHmFhMsKmc21A1J_MT6BK9dwBD-B6KRMfvML6gx3frMqtr7bHqCpDWh7b14YxEps_5czQDtBL2o4fY-2mOc0PDA==";

export const BREVO_FIELD_IDS = {
  email: "EMAIL",
  whatsapp: "WHATSAPP",
  whatsappCountry: "WHATSAPP__COUNTRY_CODE",
  nome: "NOME",
  trilha: "TRILHA",
  utmSource: "UTM_SOURCE",
  utmMedium: "UTM_MEDIUM",
  utmCampaign: "UTM_CAMPAIGN",
  cidade: "CIDADE",
  tempoEntregador: "TEMPO_ENTREGADOR",
} as const;

export const BREVO_FORM_HTML = `
<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" /></svg>
        <span class="sib-form-message-panel__inner-text">Sua assinatura não pôde ser validada.</span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-color:#13ce66; border-radius:3px; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" /></svg>
        <span class="sib-form-message-panel__inner-text">Você fez sua assinatura com sucesso.</span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="max-width:540px; text-align:center; background-color:rgba(255,255,255,1); border-width:1px; border-style:solid; border-color:#C0CCD9; border-radius:3px; direction:ltr">
      <form id="sib-form" method="POST" action="${BREVO_FORM_ACTION_URL}" data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.email}" data-required="*">Insira seu e-mail</label>
                <div class="entry__field"><input class="input " type="text" id="${BREVO_FIELD_IDS.email}" name="${BREVO_FIELD_IDS.email}" autocomplete="off" value="" placeholder="EMAIL" data-required="true" required /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-sms-field sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.whatsapp}">WHATSAPP</label>
                <div class="sib-sms-input-wrapper" style="direction:ltr">
                  <div class="sib-sms-input" data-placeholder="WHATSAPP" data-required="true" data-country-code="BR" data-value="" data-attributename="${BREVO_FIELD_IDS.whatsapp}">
                    <div class="entry__field">
                      <select class="input" name="${BREVO_FIELD_IDS.whatsappCountry}" data-required="true">
                        <option value="+55">+55 BR</option>
                        <option value="+93">+93 AF</option>
                        <option value="+1">+1 US</option>
                        <option value="+351">+351 PT</option>
                        <option value="+44">+44 GB</option>
                      </select>
                    </div>
                    <div class="entry__field" style="width: 100%">
                      <input type="tel" class="input" id="${BREVO_FIELD_IDS.whatsapp}" name="${BREVO_FIELD_IDS.whatsapp}" autocomplete="off" placeholder="Número" data-required="true" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.nome}" data-required="*">Insira seu NOME</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.nome}" name="${BREVO_FIELD_IDS.nome}" autocomplete="off" placeholder="NOME" data-required="true" required /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.trilha}">TRILHA</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.trilha}" name="${BREVO_FIELD_IDS.trilha}" autocomplete="off" placeholder="TRILHA" /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.utmSource}">UTM_SOURCE</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.utmSource}" name="${BREVO_FIELD_IDS.utmSource}" autocomplete="off" placeholder="UTM_SOURCE" /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.utmMedium}">UTM_MEDIUM</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.utmMedium}" name="${BREVO_FIELD_IDS.utmMedium}" autocomplete="off" placeholder="UTM_MEDIUM" /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.utmCampaign}">UTM_CAMPAIGN</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.utmCampaign}" name="${BREVO_FIELD_IDS.utmCampaign}" autocomplete="off" placeholder="UTM_CAMPAIGN" /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.cidade}">CIDADE</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.cidade}" name="${BREVO_FIELD_IDS.cidade}" autocomplete="off" placeholder="CIDADE" /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="${BREVO_FIELD_IDS.tempoEntregador}">TEMPO_ENTREGADOR</label>
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="${BREVO_FIELD_IDS.tempoEntregador}" name="${BREVO_FIELD_IDS.tempoEntregador}" autocomplete="off" placeholder="TEMPO_ENTREGADOR" /></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit" style="visibility:hidden;position:absolute;pointer-events:none">
              ASSINAR
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="pt">
      </form>
    </div>
  </div>
</div>
`;
