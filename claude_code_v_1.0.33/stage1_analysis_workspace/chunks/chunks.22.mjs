
// @from(Start 2116795, End 2125835)
dkA = z((t18, mkA) => {
  var _a9 = (A) => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
        }
      }
    },
    ja9 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    ya9 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    ka9 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    xa9 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    fa9 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

  function va9(A) {
    let B = _a9(A),
      Q = xa9,
      I = ka9,
      G = "@[a-z-]+",
      Z = "and or not only",
      D = "[a-zA-Z-][a-zA-Z0-9_-]*",
      Y = {
        className: "variable",
        begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
      };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      }, {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      }, B.ATTRIBUTE_SELECTOR_MODE, {
        className: "selector-tag",
        begin: "\\b(" + ja9.join("|") + ")\\b",
        relevance: 0
      }, {
        className: "selector-pseudo",
        begin: ":(" + I.join("|") + ")"
      }, {
        className: "selector-pseudo",
        begin: "::(" + Q.join("|") + ")"
      }, Y, {
        begin: /\(/,
        end: /\)/,
        contains: [A.CSS_NUMBER_MODE]
      }, {
        className: "attribute",
        begin: "\\b(" + fa9.join("|") + ")\\b"
      }, {
        begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
      }, {
        begin: ":",
        end: ";",
        contains: [Y, B.HEXCOLOR, A.CSS_NUMBER_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, B.IMPORTANT]
      }, {
        begin: "@(page|font-face)",
        lexemes: "@[a-z-]+",
        keywords: "@page @font-face"
      }, {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: "and or not only",
          attribute: ya9.join(" ")
        },
        contains: [{
          begin: "@[a-z-]+",
          className: "keyword"
        }, {
          begin: /[a-z-]+(?=:)/,
          className: "attribute"
        }, Y, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, B.HEXCOLOR, A.CSS_NUMBER_MODE]
      }]
    }
  }
  mkA.exports = va9
})
// @from(Start 2125841, End 2126181)
pkA = z((e18, ukA) => {
  function ba9(A) {
    return {
      name: "Shell Session",
      aliases: ["console"],
      contains: [{
        className: "meta",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }]
    }
  }
  ukA.exports = ba9
})
// @from(Start 2126187, End 2127794)
lkA = z((AA8, ckA) => {
  function ga9(A) {
    let B = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"],
      Q = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"],
      I = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
    return {
      name: "Smali",
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0
      }, A.COMMENT("#", "$", {
        relevance: 0
      }), {
        className: "keyword",
        variants: [{
          begin: "\\s*\\.end\\s[a-zA-Z0-9]*"
        }, {
          begin: "^[ ]*\\.[a-zA-Z]*",
          relevance: 0
        }, {
          begin: "\\s:[a-zA-Z_0-9]*",
          relevance: 0
        }, {
          begin: "\\s(" + I.join("|") + ")"
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "\\s(" + B.join("|") + ")\\s"
        }, {
          begin: "\\s(" + B.join("|") + ")((-|/)[a-zA-Z0-9]+)+\\s",
          relevance: 10
        }, {
          begin: "\\s(" + Q.join("|") + ")((-|/)[a-zA-Z0-9]+)*\\s",
          relevance: 10
        }]
      }, {
        className: "class",
        begin: `L[^(;:
]*;`,
        relevance: 0
      }, {
        begin: "[vp][0-9]+"
      }]
    }
  }
  ckA.exports = ga9
})
// @from(Start 2127800, End 2128764)
nkA = z((BA8, ikA) => {
  function ha9(A) {
    let Q = {
        className: "string",
        begin: "\\$.{1}"
      },
      I = {
        className: "symbol",
        begin: "#" + A.UNDERSCORE_IDENT_RE
      };
    return {
      name: "Smalltalk",
      aliases: ["st"],
      keywords: "self super nil true false thisContext",
      contains: [A.COMMENT('"', '"'), A.APOS_STRING_MODE, {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      }, {
        begin: "[a-z][a-zA-Z0-9_]*:",
        relevance: 0
      }, A.C_NUMBER_MODE, I, Q, {
        begin: "\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",
        returnBegin: !0,
        end: /\|/,
        illegal: /\S/,
        contains: [{
          begin: "(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"
        }]
      }, {
        begin: "#\\(",
        end: "\\)",
        contains: [A.APOS_STRING_MODE, Q, A.C_NUMBER_MODE, I]
      }]
    }
  }
  ikA.exports = ha9
})
// @from(Start 2128770, End 2130293)
skA = z((QA8, akA) => {
  function ma9(A) {
    return {
      name: "SML (Standard ML)",
      aliases: ["ml"],
      keywords: {
        $pattern: "[a-z_]\\w*!?",
        keyword: "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
        built_in: "array bool char exn int list option order real ref string substring vector unit word",
        literal: "true false NONE SOME LESS EQUAL GREATER nil"
      },
      illegal: /\/\/|>>/,
      contains: [{
        className: "literal",
        begin: /\[(\|\|)?\]|\(\)/,
        relevance: 0
      }, A.COMMENT("\\(\\*", "\\*\\)", {
        contains: ["self"]
      }), {
        className: "symbol",
        begin: "'[A-Za-z_](?!')[\\w']*"
      }, {
        className: "type",
        begin: "`[A-Z][\\w']*"
      }, {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      }, {
        begin: "[a-z_]\\w*'[\\w']*"
      }, A.inherit(A.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "number",
        begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0
      }, {
        begin: /[-=]>/
      }]
    }
  }
  akA.exports = ma9
})
// @from(Start 2130299, End 2163101)
okA = z((IA8, rkA) => {
  function da9(A) {
    let B = {
        className: "variable",
        begin: /\b_+[a-zA-Z]\w*/
      },
      Q = {
        className: "title",
        begin: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/
      },
      I = {
        className: "string",
        variants: [{
          begin: '"',
          end: '"',
          contains: [{
            begin: '""',
            relevance: 0
          }]
        }, {
          begin: "'",
          end: "'",
          contains: [{
            begin: "''",
            relevance: 0
          }]
        }]
      },
      G = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "define undef ifdef ifndef else endif include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, A.inherit(I, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<[^\n>]*>/,
          end: /$/,
          illegal: "\\n"
        }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      };
    return {
      name: "SQF",
      case_insensitive: !0,
      keywords: {
        keyword: "case catch default do else exit exitWith for forEach from if private switch then throw to try waitUntil while with",
        built_in: "abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler addForce addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem addSwitchableUnit addTeamMember addToRemainsCollector addTorque addUniform addVehicle addVest addWaypoint addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool addWeaponTurret admin agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airplaneThrottle airportSide AISFinishHeal alive all3DENEntities allAirports allControls allCurators allCutLayers allDead allDeadMen allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn allowSprint allPlayers allSimpleObjects allSites allTurrets allUnits allUnitsUAV allVariables ammo ammoOnPylon and animate animateBay animateDoor animatePylon animateSource animationNames animationPhase animationSourcePhase animationState append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor behaviour benchmark binocular boundingBox boundingBoxReal boundingCenter breakOut breakTo briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canTriggerDynamicSimulation canUnloadInCombat canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled checkAIFeature checkVisibility className clearAllItemsFromBackpack clearBackpackCargo clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay closeOverlay collapseObjectTree collect3DENHistory collectiveRTD combatMode commandArtilleryFire commandChat commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName configProperties configSourceAddonList configSourceMod configSourceModList confirmSensorTarget connectTerminalToUAV controlsGroupCtrl copyFromClipboard copyToClipboard copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew createVehicleLocal crew ctAddHeader ctAddRow ctClear ctCurSel ctData ctFindHeaderRows ctFindRowHeader ctHeaderControls ctHeaderCount ctRemoveHeaders ctRemoveRows ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPixelPrecision ctrlSetPosition ctrlSetScale ctrlSetStructuredText ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlTextWidth ctrlType ctrlVisible ctRowControls ctRowCount ctSetCurSel ctSetData ctSetHeaderTemplate ctSetRowTemplate ctSetValue ctValue curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup deleteGroupWhenEmpty deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts diag_activeSQSScripts diag_captureFrame diag_captureFrameToFile diag_captureSlowFrame diag_codePerformance diag_drawMode diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_lightNewLoad diag_list diag_log diag_logSlowFrame diag_mergeConfigFile diag_recordTurretLimits diag_setLightNew diag_tickTime diag_toggle dialog diarySubjectExists didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction directSay disableAI disableCollisionWith disableConversation disableDebriefingStats disableMapIndicators disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon drawRectangle drawTriangle driver drop dynamicSimulationDistance dynamicSimulationDistanceCoef dynamicSimulationEnabled dynamicSimulationSystemEnabled echo edit3DENMissionAttributes editObject editorSetEventHandler effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack enableAudioFeature enableAutoStartUpRTD enableAutoTrimRTD enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot enableDebriefingStats enableDiagLegend enableDynamicSimulation enableDynamicSimulationSystem enableEndDialog enableEngineArtillery enableEnvironment enableFatigue enableGunLights enableInfoPanelComponent enableIRLasers enableMimics enablePersonTurret enableRadio enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableTraffic enableUAVConnectability enableUAVWaypoints enableVehicleCargo enableVehicleSensor enableWeaponDisassembly endLoadingScreen endMission engineOn enginesIsOnRTD enginesRpmRTD enginesTorqueRTD entities environmentEnabled estimatedEndServerTime estimatedTimeLeft evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject findEmptyPosition findEmptyPositionReady findIf findNearestEnemy finishMissionInit finite fire fireAtTarget firstBackpack flag flagAnimationPhase flagOwner flagSide flagTexture fleeing floor flyInHeight flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceFlagTexture forceFollowRoad forceMap forceRespawn forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent forEachMemberTeam forgetTarget format formation formationDirection formationLeader formationMembers formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected getAimingCoef getAllEnvSoundControllers getAllHitPointsDamage getAllOwnedMines getAllSoundControllers getAmmoCargo getAnimAimPrecision getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState getClientStateNumber getCompatiblePylonMagazines getConnectedUAV getContainerMaxLoad getCursorObjectParams getCustomAimCoef getDammage getDescription getDir getDirVisual getDLCAssetsUsage getDLCAssetsUsageByName getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset getEnvSoundController getFatigue getForcedFlagTexture getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getMusicPlayedTime getNumber getObjectArgument getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlateNumber getPlayerChannel getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL getPosATLVisual getPosVisual getPosWorld getPylonMagazines getRelDir getRelPos getRemoteSensorsDisabled getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSoundController getSoundControllerResult getSpeed getStamina getStatValue getSuppression getTerrainGrid getTerrainHeightASL getText getTotalDLCUsageTime getUnitLoadout getUnitTrait getUserMFDText getUserMFDvalue getVariable getVehicleCargo getWeaponCargo getWeaponSway getWingsOrientationRTD getWingsPositionRTD getWPPos glanceAt globalChat globalRadio goggles goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner groupRadio groupSelectedUnits groupSelectUnit gunner gusts halt handgunItems handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups importance in inArea inAreaArray incapacitatedState inflame inflamed infoPanel infoPanelComponentEnabled infoPanelComponents infoPanels inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn isCopilotEnabled isDamageAllowed isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn isFlatEmpty isForcedWalk isFormationLeader isGroupDeletedWhenEmpty isHidden isInRemainsCollector isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLaserOn isLightOn isLocalized isManualFire isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP isServer isShowing3DIcons isSimpleObject isSprintAllowed isStaminaEnabled isSteamMission isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable isUAVConnected isUIContext isUniformAllowed isVehicleCargo isVehicleRadarOn isVehicleSensorEnabled isWalking isWeaponDeployed isWeaponRested itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbColorRight lbCurSel lbData lbDelete lbIsSelected lbPicture lbPictureRight lbSelection lbSetColor lbSetColorRight lbSetCurSel lbSetData lbSetPicture lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetPictureRight lbSetPictureRightColor lbSetPictureRightColorDisabled lbSetPictureRightColorSelected lbSetSelectColor lbSetSelectColorRight lbSetSelected lbSetText lbSetTextRight lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText lbTextRight lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaderboardRequestRowsFriends leaderboardsRequestUploadScore leaderboardsRequestUploadScoreKeepBest leaderboardState leaveVehicle libraryCredits libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed linearConversion lineIntersects lineIntersectsObjs lineIntersectsSurfaces lineIntersectsWith linkItem list listObjects listRemoteTargets listVehicleSensors ln lnbAddArray lnbAddColumn lnbAddRow lnbClear lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue lnbSize lnbSort lnbSortByValue lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine loadOverlay loadStatus loadUniform loadVest local localize locationPosition lock lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld modelToWorldVisual modelToWorldVisualWorld modelToWorldWorld modParams moonIntensity moonPhase morale move move3DENCamera moveInAny moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems not numberOfEnginesRTD numberToDate objectCurators objectFromNetId objectParent objStatus onBriefingGroup onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openSteamApp openYoutubeVideo or orderGetIn overcast overcastForecast owner param params parseNumber parseSimpleArray parseText parsingNamespace particlesQuality pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon primaryWeaponItems primaryWeaponMagazine priority processDiaryLink productVersion profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload reloadEnabled remoteControl remoteExec remoteExecCall remoteExecutedOwner remove3DENConnection remove3DENEventHandler remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon removeWeaponAttachmentCargo removeWeaponCargo removeWeaponGlobal removeWeaponTurret reportRemoteTarget requiredVersion resetCamShake resetSubgroupDirection resize resources respawnVehicle restartEditorCamera reveal revealMine reverse reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectRandomWeighted selectWeapon selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer set3DENLinesVisible set3DENLogicType set3DENMissionAttribute set3DENMissionAttributes set3DENModelsVisible set3DENObjectType set3DENSelected setAccTime setActualCollectiveRTD setAirplaneThrottle setAirportSide setAmmo setAmmoCargo setAmmoOnPylon setAnimSpeedCoef setAperture setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining setBrakesRTD setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTI setCaptive setCenterOfMass setCollisionLight setCombatMode setCompassOscillation setConvoySeparation setCuratorCameraAreaCeiling setCuratorCoef setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask setCurrentWaypoint setCustomAimCoef setCustomWeightRTD setDamage setDammage setDate setDebriefingText setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon setDriveOnPath setDropInterval setDynamicSimulationDistance setDynamicSimulationDistanceCoef setEditorMode setEditorObjectScope setEffectCondition setEngineRPMRTD setFace setFaceAnimation setFatigue setFeatureType setFlagAnimationPhase setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef setHUDMovementLevels setIdentity setImportance setInfoPanel setLeader setLightAmbient setLightAttenuation setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass setParticleFire setParticleParams setParticleRandom setPilotCameraDirection setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlateNumber setPlayable setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld setPylonLoadOut setPylonsPriority setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo setRotorBrakeRTD setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits setTargetAge setTaskMarkerOffset setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect setTrafficDensity setTrafficDistance setTrafficGap setTrafficSpeed setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setUserMFDText setUserMFDvalue setVariable setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleRadar setVehicleReceiveRemoteTargets setVehicleReportOwnPosition setVehicleReportRemoteTargets setVehicleTIPars setVehicleVarName setVelocity setVelocityModelSpace setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWantedRPMRTD setWaves setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWingForceScaleRTD setWPPos show3DIcons showChat showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch showWaypoint showWaypoints side sideChat sideEnemy sideFriendly sideRadio simpleTasks simulationEnabled simulCloudDensity simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth switchableUnits switchAction switchCamera switchGesture switchLight switchMove synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan targetKnowledge targets targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskParent taskResult taskState taskType teamMember teamName teams teamSwitch teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL terrainIntersectAtASL text textLog textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerDynamicSimulation triggerStatements triggerText triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear tvCollapse tvCollapseAll tvCount tvCurSel tvData tvDelete tvExpand tvExpandAll tvPicture tvSetColor tvSetCurSel tvSetData tvSetPicture tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem updateObjectTree useAISteeringComponent useAudioTimeForMoves userInputDisabled vectorAdd vectorCos vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorModelToWorld vectorModelToWorldVisual vectorMultiply vectorNormalized vectorUp vectorUpVisual vectorWorldToModel vectorWorldToModelVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicleReceiveRemoteTargets vehicleReportOwnPosition vehicleReportRemoteTargets vehicles vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD WFSideText wind ",
        literal: "blufor civilian configNull controlNull displayNull east endl false grpNull independent lineBreak locationNull nil objNull opfor pi resistance scriptNull sideAmbientLife sideEmpty sideLogic sideUnknown taskNull teamMemberNull true west"
      },
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.NUMBER_MODE, B, Q, I, G],
      illegal: /#|^\$ /
    }
  }
  rkA.exports = da9
})
// @from(Start 2163107, End 2175778)
ekA = z((GA8, tkA) => {
  function ua9(A) {
    var B = A.COMMENT("--", "$");
    return {
      name: "SQL (more)",
      aliases: ["mysql", "oracle"],
      disableAutodetect: !0,
      case_insensitive: !0,
      illegal: /[<>{}*]/,
      contains: [{
        beginKeywords: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
        end: /;/,
        endsWithParent: !0,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
          literal: "true false null unknown",
          built_in: "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void"
        },
        contains: [{
          className: "string",
          begin: "'",
          end: "'",
          contains: [{
            begin: "''"
          }]
        }, {
          className: "string",
          begin: '"',
          end: '"',
          contains: [{
            begin: '""'
          }]
        }, {
          className: "string",
          begin: "`",
          end: "`"
        }, A.C_NUMBER_MODE, A.C_BLOCK_COMMENT_MODE, B, A.HASH_COMMENT_MODE]
      }, A.C_BLOCK_COMMENT_MODE, B, A.HASH_COMMENT_MODE]
    }
  }
  tkA.exports = ua9
})
// @from(Start 2175784, End 2183850)
QxA = z((ZA8, BxA) => {
  function AxA(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source
  }

  function pa9(...A) {
    return A.map((Q) => AxA(Q)).join("")
  }

  function pT1(...A) {
    return "(" + A.map((Q) => AxA(Q)).join("|") + ")"
  }

  function ca9(A) {
    let B = A.COMMENT("--", "$"),
      Q = {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/
          }]
        }]
      },
      I = {
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/
        }]
      },
      G = ["true", "false", "unknown"],
      Z = ["double precision", "large object", "with timezone", "without timezone"],
      D = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"],
      Y = ["add", "asc", "collation", "desc", "final", "first", "last", "view"],
      W = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update   ", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year"],
      J = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"],
      F = ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"],
      X = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"],
      V = J,
      C = [...W, ...Y].filter((O) => {
        return !J.includes(O)
      }),
      K = {
        className: "variable",
        begin: /@[a-z0-9]+/
      },
      E = {
        className: "operator",
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0
      },
      N = {
        begin: pa9(/\b/, pT1(...V), /\s*\(/),
        keywords: {
          built_in: V
        }
      };

    function q(O, {
      exceptions: R,
      when: T
    } = {}) {
      let L = T;
      return R = R || [], O.map((_) => {
        if (_.match(/\|\d+$/) || R.includes(_)) return _;
        else if (L(_)) return `${_}|0`;
        else return _
      })
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: q(C, {
          when: (O) => O.length < 3
        }),
        literal: G,
        type: D,
        built_in: F
      },
      contains: [{
        begin: pT1(...X),
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: C.concat(X),
          literal: G,
          type: D
        }
      }, {
        className: "type",
        begin: pT1(...Z)
      }, N, K, Q, I, A.C_NUMBER_MODE, A.C_BLOCK_COMMENT_MODE, B, E]
    }
  }
  BxA.exports = ca9
})
// @from(Start 2183856, End 2192258)
GxA = z((DA8, IxA) => {
  function la9(A) {
    let B = ["functions", "model", "data", "parameters", "quantities", "transformed", "generated"],
      Q = ["for", "in", "if", "else", "while", "break", "continue", "return"],
      I = ["print", "reject", "increment_log_prob|10", "integrate_ode|10", "integrate_ode_rk45|10", "integrate_ode_bdf|10", "algebra_solver"],
      G = ["int", "real", "vector", "ordered", "positive_ordered", "simplex", "unit_vector", "row_vector", "matrix", "cholesky_factor_corr|10", "cholesky_factor_cov|10", "corr_matrix|10", "cov_matrix|10", "void"],
      Z = ["Phi", "Phi_approx", "abs", "acos", "acosh", "algebra_solver", "append_array", "append_col", "append_row", "asin", "asinh", "atan", "atan2", "atanh", "bernoulli_cdf", "bernoulli_lccdf", "bernoulli_lcdf", "bernoulli_logit_lpmf", "bernoulli_logit_rng", "bernoulli_lpmf", "bernoulli_rng", "bessel_first_kind", "bessel_second_kind", "beta_binomial_cdf", "beta_binomial_lccdf", "beta_binomial_lcdf", "beta_binomial_lpmf", "beta_binomial_rng", "beta_cdf", "beta_lccdf", "beta_lcdf", "beta_lpdf", "beta_rng", "binary_log_loss", "binomial_cdf", "binomial_coefficient_log", "binomial_lccdf", "binomial_lcdf", "binomial_logit_lpmf", "binomial_lpmf", "binomial_rng", "block", "categorical_logit_lpmf", "categorical_logit_rng", "categorical_lpmf", "categorical_rng", "cauchy_cdf", "cauchy_lccdf", "cauchy_lcdf", "cauchy_lpdf", "cauchy_rng", "cbrt", "ceil", "chi_square_cdf", "chi_square_lccdf", "chi_square_lcdf", "chi_square_lpdf", "chi_square_rng", "cholesky_decompose", "choose", "col", "cols", "columns_dot_product", "columns_dot_self", "cos", "cosh", "cov_exp_quad", "crossprod", "csr_extract_u", "csr_extract_v", "csr_extract_w", "csr_matrix_times_vector", "csr_to_dense_matrix", "cumulative_sum", "determinant", "diag_matrix", "diag_post_multiply", "diag_pre_multiply", "diagonal", "digamma", "dims", "dirichlet_lpdf", "dirichlet_rng", "distance", "dot_product", "dot_self", "double_exponential_cdf", "double_exponential_lccdf", "double_exponential_lcdf", "double_exponential_lpdf", "double_exponential_rng", "e", "eigenvalues_sym", "eigenvectors_sym", "erf", "erfc", "exp", "exp2", "exp_mod_normal_cdf", "exp_mod_normal_lccdf", "exp_mod_normal_lcdf", "exp_mod_normal_lpdf", "exp_mod_normal_rng", "expm1", "exponential_cdf", "exponential_lccdf", "exponential_lcdf", "exponential_lpdf", "exponential_rng", "fabs", "falling_factorial", "fdim", "floor", "fma", "fmax", "fmin", "fmod", "frechet_cdf", "frechet_lccdf", "frechet_lcdf", "frechet_lpdf", "frechet_rng", "gamma_cdf", "gamma_lccdf", "gamma_lcdf", "gamma_lpdf", "gamma_p", "gamma_q", "gamma_rng", "gaussian_dlm_obs_lpdf", "get_lp", "gumbel_cdf", "gumbel_lccdf", "gumbel_lcdf", "gumbel_lpdf", "gumbel_rng", "head", "hypergeometric_lpmf", "hypergeometric_rng", "hypot", "inc_beta", "int_step", "integrate_ode", "integrate_ode_bdf", "integrate_ode_rk45", "inv", "inv_Phi", "inv_chi_square_cdf", "inv_chi_square_lccdf", "inv_chi_square_lcdf", "inv_chi_square_lpdf", "inv_chi_square_rng", "inv_cloglog", "inv_gamma_cdf", "inv_gamma_lccdf", "inv_gamma_lcdf", "inv_gamma_lpdf", "inv_gamma_rng", "inv_logit", "inv_sqrt", "inv_square", "inv_wishart_lpdf", "inv_wishart_rng", "inverse", "inverse_spd", "is_inf", "is_nan", "lbeta", "lchoose", "lgamma", "lkj_corr_cholesky_lpdf", "lkj_corr_cholesky_rng", "lkj_corr_lpdf", "lkj_corr_rng", "lmgamma", "lmultiply", "log", "log10", "log1m", "log1m_exp", "log1m_inv_logit", "log1p", "log1p_exp", "log2", "log_determinant", "log_diff_exp", "log_falling_factorial", "log_inv_logit", "log_mix", "log_rising_factorial", "log_softmax", "log_sum_exp", "logistic_cdf", "logistic_lccdf", "logistic_lcdf", "logistic_lpdf", "logistic_rng", "logit", "lognormal_cdf", "lognormal_lccdf", "lognormal_lcdf", "lognormal_lpdf", "lognormal_rng", "machine_precision", "matrix_exp", "max", "mdivide_left_spd", "mdivide_left_tri_low", "mdivide_right_spd", "mdivide_right_tri_low", "mean", "min", "modified_bessel_first_kind", "modified_bessel_second_kind", "multi_gp_cholesky_lpdf", "multi_gp_lpdf", "multi_normal_cholesky_lpdf", "multi_normal_cholesky_rng", "multi_normal_lpdf", "multi_normal_prec_lpdf", "multi_normal_rng", "multi_student_t_lpdf", "multi_student_t_rng", "multinomial_lpmf", "multinomial_rng", "multiply_log", "multiply_lower_tri_self_transpose", "neg_binomial_2_cdf", "neg_binomial_2_lccdf", "neg_binomial_2_lcdf", "neg_binomial_2_log_lpmf", "neg_binomial_2_log_rng", "neg_binomial_2_lpmf", "neg_binomial_2_rng", "neg_binomial_cdf", "neg_binomial_lccdf", "neg_binomial_lcdf", "neg_binomial_lpmf", "neg_binomial_rng", "negative_infinity", "normal_cdf", "normal_lccdf", "normal_lcdf", "normal_lpdf", "normal_rng", "not_a_number", "num_elements", "ordered_logistic_lpmf", "ordered_logistic_rng", "owens_t", "pareto_cdf", "pareto_lccdf", "pareto_lcdf", "pareto_lpdf", "pareto_rng", "pareto_type_2_cdf", "pareto_type_2_lccdf", "pareto_type_2_lcdf", "pareto_type_2_lpdf", "pareto_type_2_rng", "pi", "poisson_cdf", "poisson_lccdf", "poisson_lcdf", "poisson_log_lpmf", "poisson_log_rng", "poisson_lpmf", "poisson_rng", "positive_infinity", "pow", "print", "prod", "qr_Q", "qr_R", "quad_form", "quad_form_diag", "quad_form_sym", "rank", "rayleigh_cdf", "rayleigh_lccdf", "rayleigh_lcdf", "rayleigh_lpdf", "rayleigh_rng", "reject", "rep_array", "rep_matrix", "rep_row_vector", "rep_vector", "rising_factorial", "round", "row", "rows", "rows_dot_product", "rows_dot_self", "scaled_inv_chi_square_cdf", "scaled_inv_chi_square_lccdf", "scaled_inv_chi_square_lcdf", "scaled_inv_chi_square_lpdf", "scaled_inv_chi_square_rng", "sd", "segment", "sin", "singular_values", "sinh", "size", "skew_normal_cdf", "skew_normal_lccdf", "skew_normal_lcdf", "skew_normal_lpdf", "skew_normal_rng", "softmax", "sort_asc", "sort_desc", "sort_indices_asc", "sort_indices_desc", "sqrt", "sqrt2", "square", "squared_distance", "step", "student_t_cdf", "student_t_lccdf", "student_t_lcdf", "student_t_lpdf", "student_t_rng", "sub_col", "sub_row", "sum", "tail", "tan", "tanh", "target", "tcrossprod", "tgamma", "to_array_1d", "to_array_2d", "to_matrix", "to_row_vector", "to_vector", "trace", "trace_gen_quad_form", "trace_quad_form", "trigamma", "trunc", "uniform_cdf", "uniform_lccdf", "uniform_lcdf", "uniform_lpdf", "uniform_rng", "variance", "von_mises_lpdf", "von_mises_rng", "weibull_cdf", "weibull_lccdf", "weibull_lcdf", "weibull_lpdf", "weibull_rng", "wiener_lpdf", "wishart_lpdf", "wishart_rng"],
      D = ["bernoulli", "bernoulli_logit", "beta", "beta_binomial", "binomial", "binomial_logit", "categorical", "categorical_logit", "cauchy", "chi_square", "dirichlet", "double_exponential", "exp_mod_normal", "exponential", "frechet", "gamma", "gaussian_dlm_obs", "gumbel", "hypergeometric", "inv_chi_square", "inv_gamma", "inv_wishart", "lkj_corr", "lkj_corr_cholesky", "logistic", "lognormal", "multi_gp", "multi_gp_cholesky", "multi_normal", "multi_normal_cholesky", "multi_normal_prec", "multi_student_t", "multinomial", "neg_binomial", "neg_binomial_2", "neg_binomial_2_log", "normal", "ordered_logistic", "pareto", "pareto_type_2", "poisson", "poisson_log", "rayleigh", "scaled_inv_chi_square", "skew_normal", "student_t", "uniform", "von_mises", "weibull", "wiener", "wishart"];
    return {
      name: "Stan",
      aliases: ["stanfuncs"],
      keywords: {
        $pattern: A.IDENT_RE,
        title: B,
        keyword: Q.concat(G).concat(I),
        built_in: Z
      },
      contains: [A.C_LINE_COMMENT_MODE, A.COMMENT(/#/, /$/, {
        relevance: 0,
        keywords: {
          "meta-keyword": "include"
        }
      }), A.COMMENT(/\/\*/, /\*\//, {
        relevance: 0,
        contains: [{
          className: "doctag",
          begin: /@(return|param)/
        }]
      }), {
        begin: /<\s*lower\s*=/,
        keywords: "lower"
      }, {
        begin: /[<,]\s*upper\s*=/,
        keywords: "upper"
      }, {
        className: "keyword",
        begin: /\btarget\s*\+=/,
        relevance: 10
      }, {
        begin: "~\\s*(" + A.IDENT_RE + ")\\s*\\(",
        keywords: D
      }, {
        className: "number",
        variants: [{
          begin: /\b\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/
        }, {
          begin: /\.\d+(?:[eE][+-]?\d+)?\b/
        }],
        relevance: 0
      }, {
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0
      }]
    }
  }
  IxA.exports = la9
})
// @from(Start 2192264, End 2209207)
DxA = z((YA8, ZxA) => {
  function ia9(A) {
    return {
      name: "Stata",
      aliases: ["do", "ado"],
      case_insensitive: !0,
      keywords: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey bias binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 bubble bubbleplot ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error esize est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 forest forestplot form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate funnel funnelplot g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labbe labbeplot labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize menl meqparse mer merg merge meta mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trimfill trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
      contains: [{
        className: "symbol",
        begin: /`[a-zA-Z0-9_]+'/
      }, {
        className: "variable",
        begin: /\$\{?[a-zA-Z0-9_]+\}?/
      }, {
        className: "string",
        variants: [{
          begin: `\`"[^\r
]*?"'`
        }, {
          begin: `"[^\r
"]*"`
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\()"
        }]
      }, A.COMMENT("^[ 	]*\\*.*$", !1), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
    }
  }
  ZxA.exports = ia9
})
// @from(Start 2209213, End 2210149)
WxA = z((WA8, YxA) => {
  function na9(A) {
    return {
      name: "STEP Part 21",
      aliases: ["p21", "step", "stp"],
      case_insensitive: !0,
      keywords: {
        $pattern: "[A-Z_][A-Z0-9_.]*",
        keyword: "HEADER ENDSEC DATA"
      },
      contains: [{
        className: "meta",
        begin: "ISO-10303-21;",
        relevance: 10
      }, {
        className: "meta",
        begin: "END-ISO-10303-21;",
        relevance: 10
      }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.COMMENT("/\\*\\*!", "\\*/"), A.C_NUMBER_MODE, A.inherit(A.APOS_STRING_MODE, {
        illegal: null
      }), A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "symbol",
        variants: [{
          begin: "#",
          end: "\\d+",
          illegal: "\\W"
        }]
      }]
    }
  }
  YxA.exports = na9
})