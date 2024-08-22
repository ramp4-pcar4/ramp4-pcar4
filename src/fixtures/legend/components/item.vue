<template>
    <div
        :key="`${legendItem.uid}-${legendItem.visibility}`"
        v-if="!legendItem.hidden"
        ref="el"
    >
        <div class="relative">
            <div
                class="flex items-center hover:bg-gray-200 default-focus-style !p-5"
                :class="[
                    legendItem.type === LegendType.Item
                        ? 'loaded-item'
                        : legendItem.type === LegendType.Error
                          ? 'non-loaded-item bg-red-200'
                          : 'non-loaded-item',
                    (isGroup && controlAvailable(LegendControl.Expand)) ||
                    (!isGroup &&
                        legendItem instanceof LayerItem &&
                        controlAvailable(LayerControl.Datatable) &&
                        getDatagridExists() &&
                        legendItem.type === LegendType.Item)
                        ? 'cursor-pointer'
                        : 'cursor-default'
                ]"
                @mouseover.stop="hover($event.currentTarget!)"
                @mouseout="
                    //@ts-ignore
                    mobileMode ? null : $event.currentTarget?._tippy?.hide(),
                        (hovered = false)
                "
                @click="
                    () => {
                        if (
                            !isGroup &&
                            legendItem instanceof LayerItem &&
                            controlAvailable(LayerControl.Datatable) &&
                            getDatagridExists() &&
                            legendItem.type === LegendType.Item
                        ) {
                            toggleGrid();
                        } else if (isGroup) {
                            toggleExpand();
                        }
                    }
                "
                v-focus-item="'show-truncate'"
                :content="
                    isGroup && controlAvailable(LegendControl.Expand)
                        ? t(
                              legendItem.expanded
                                  ? 'legend.group.collapse'
                                  : 'legend.group.expand'
                          )
                        : legendItem instanceof LayerItem &&
                            legendItem.type === LegendType.Item &&
                            controlAvailable(LayerControl.Datatable) &&
                            getDatagridExists()
                          ? t('legend.layer.data')
                          : ''
                "
                v-tippy="{
                    placement: 'bottom-start',
                    trigger: 'manual focus',
                    aria: 'describedby'
                }"
                truncate-trigger
            >
                <!-- smiley face. very important that we migrate this -->
                <div
                    class="flex p-5"
                    v-if="legendItem.type !== LegendType.Item"
                >
                    <svg
                        v-if="legendItem.type === LegendType.Placeholder"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"
                        />
                    </svg>
                    <!-- sad face for layer error -->
                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="24px"
                        height="24px"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <path
                            d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z"
                        ></path>
                    </svg>
                </div>

                <!-- symbology stack toggle-->
                <div
                    class="relative w-32 h-32 mr-15"
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem &&
                        legendItem.layer.legend.length > 0
                    "
                    @mouseover.stop
                >
                    <button
                        type="button"
                        @click.stop="toggleSymbology"
                        :class="[
                            controlAvailable(LayerControl.Symbology)
                                ? 'cursor-pointer'
                                : 'cursor-default'
                        ]"
                        :disabled="!controlAvailable(LayerControl.Symbology)"
                        :content="
                            legendItem instanceof LayerItem &&
                            legendItem.symbologyExpanded
                                ? t('legend.symbology.hide')
                                : t('legend.symbology.expand')
                        "
                        :aria-label="
                            legendItem instanceof LayerItem &&
                            legendItem.symbologyExpanded
                                ? t('legend.symbology.hide')
                                : t('legend.symbology.expand')
                        "
                        v-tippy="{
                            placement: 'bottom-start'
                        }"
                    >
                        <symbology-stack
                            v-if="!legendItem.coverIcon"
                            :class="{
                                'pointer-events-none': !controlAvailable(
                                    LayerControl.Symbology
                                )
                            }"
                            class="w-32 h-32"
                            :visible="
                                legendItem instanceof LayerItem &&
                                legendItem.symbologyExpanded
                            "
                            :legendItem="legendItem"
                        />
                        <img
                            v-else
                            :class="{
                                'pointer-events-none': !controlAvailable(
                                    LayerControl.Symbology
                                )
                            }"
                            class="w-32 h-32 hover:scale-105"
                            :src="legendItem.coverIcon"
                            alt="Cover icon not found :("
                        />
                    </button>
                </div>

                <!-- dropdown icon -->
                <div
                    v-if="isGroup && controlAvailable(LegendControl.Expand)"
                    class="expand-toggle p-8 pointer-events-none"
                    :class="{ 'rotate-180': legendItem.expanded }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                    >
                        <path
                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                        />
                    </svg>
                </div>

                <div
                    class="flex flex-1 flex-col p-5"
                    v-if="legendItem instanceof LayerItem"
                    v-truncate
                >
                    <!-- name or info section-->
                    <div class="pointer-events-none">
                        <div
                            class="flex-auto pointer-events-none p-5 truncate"
                            v-truncate="{
                                externalTrigger: true,
                                noTruncateClass: true
                            }"
                        >
                            <span>{{
                                legendItem.name ??
                                (!legendItem.layer ||
                                legendItem?.layer?.name === ''
                                    ? legendItem.layerId
                                    : legendItem.layer?.name)
                            }}</span>
                        </div>
                    </div>
                    <!-- Mini-icons -->
                    <div
                        v-if="legendItem.type !== LegendType.Placeholder"
                        class="ml-5 flex-none text-[11px] flex flex-row gap-2 mt-[-5px] flex-wrap w-fit"
                        v-focus-list="'horizontal'"
                        @mouseover.stop
                    >
                        <LayerTypeIcon
                            v-focus-item
                            :layerType="legendItem.layer?.layerType"
                            :featureCount="legendItem.layer?.featureCount"
                            @keypress.stop
                            @click.stop
                        />
                        <!-- Datatable availability -->
                        <!-- Clicking this icon will open the datatable, unlike the others -->
                        <MiniIcon
                            v-focus-item
                            label=""
                            content="Datatable available (click to view)"
                            v-if="
                                legendItem instanceof LayerItem &&
                                controlAvailable(LayerControl.Datatable) &&
                                getDatagridExists() &&
                                legendItem.type === LegendType.Item
                            "
                        >
                            <!-- No attribution required -->
                            <svg
                                class="fill-gray-800"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 122.88 108.01"
                                height="13px"
                                width="13px"
                                style="enable-background: new 0 0 122.88 108.01"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        class="st0"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.35,0h90.19c8.99,0,16.35,7.36,16.35,16.35v75.32c0,8.99-7.36,16.35-16.35,16.35H16.35 C7.36,108.01,0,100.66,0,91.67V16.35C0,7.36,7.36,0,16.35,0L16.35,0z M64.64,77.54h49.62v21.2H64.64V77.54L64.64,77.54z M8.02,77.54h49.62v21.2H8.02V77.54L8.02,77.54z M8.02,21.13h49.62v21.2H8.02V21.13L8.02,21.13z M8.02,49.34h49.62v21.2H8.02V49.34 L8.02,49.34z M64.64,21.13h49.62v21.2H64.64V21.13L64.64,21.13z M64.64,49.34h49.62v21.2H64.64V49.34L64.64,49.34z"
                                    />
                                </g>
                            </svg>
                        </MiniIcon>
                        <!-- Identify availability -->
                        <!-- Show 'not available' when identify disabled, hide icon altogether if layer disabled -->
                        <MiniIcon
                            v-focus-item
                            v-if="legendItem._visibility"
                            label=""
                            :content="
                                legendItem.layer?.canIdentify()
                                    ? 'Identify available (click map)'
                                    : 'Identify disabled or unavailable'
                            "
                            @keypress.stop
                            @click.stop
                        >
                            <!-- No attribution required -->
                            <svg
                                :class="[
                                    legendItem.layer?.canIdentify()
                                        ? 'fill-gray-800'
                                        : 'fill-red-500'
                                ]"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="12px"
                                height="12px"
                                viewBox="0 0 122.879 119.799"
                                enable-background="new 0 0 122.879 119.799"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"
                                    />
                                </g>
                            </svg>

                            <svg
                                v-if="!legendItem.layer?.canIdentify()"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="12px"
                                height="12px"
                                viewBox="0 0 122.879 122.879"
                                enable-background="new 0 0 122.879 122.879"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        fill="#FF4141"
                                        d="M61.44,0c16.96,0,32.328,6.882,43.453,17.986c11.104,11.125,17.986,26.494,17.986,43.453 c0,16.961-6.883,32.328-17.986,43.453C93.769,115.998,78.4,122.879,61.44,122.879c-16.96,0-32.329-6.881-43.454-17.986 C6.882,93.768,0,78.4,0,61.439C0,44.48,6.882,29.111,17.986,17.986C29.112,6.882,44.48,0,61.44,0L61.44,0z M73.452,39.152 c2.75-2.792,7.221-2.805,9.986-0.026c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.077,12.25 c2.728,2.77,2.689,7.256-0.081,10.021c-2.772,2.766-7.229,2.758-9.954-0.012L61.445,71.541L49.428,83.729 c-2.75,2.793-7.22,2.805-9.985,0.025c-2.763-2.775-2.776-7.291-0.026-10.082L51.48,61.435l-12.078-12.25 c-2.726-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.954,0.013L61.435,51.34L73.452,39.152L73.452,39.152z M96.899,25.98C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685 c-9.073,9.073-14.684,21.609-14.684,35.459s5.611,26.387,14.684,35.459c9.073,9.074,21.609,14.686,35.46,14.686 c13.85,0,26.386-5.611,35.459-14.686c9.073-9.072,14.684-21.609,14.684-35.459S105.973,35.054,96.899,25.98L96.899,25.98z"
                                    />
                                </g>
                            </svg>
                        </MiniIcon>
                        <!-- Icon for user-added layers -->
                        <MiniIcon
                            v-focus-item
                            label="User"
                            content="User-added layer (will not save across sessions)"
                            v-if="legendItem.layer?.userAdded"
                            @keypress.stop
                            @click.stop
                        >
                            <!-- No attribution required -->
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                height="12px"
                                width="12px"
                                class="fill-green-600"
                                viewBox="0 0 122.88 121.42"
                                style="enable-background: new 0 0 122.88 121.42"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        class="st0"
                                        d="M0,121.42l0-19.63c10.5-4.67,42.65-13.56,44.16-26.41c0.34-2.9-6.5-13.96-8.07-19.26 c-3.36-5.35-4.56-13.85-0.89-19.5c1.46-2.25,0.84-10.44,0.84-13.53c0-30.77,53.92-30.78,53.92,0c0,3.89-0.9,11.04,1.22,14.1 c3.54,5.12,1.71,14.19-1.27,18.93c-1.91,5.57-9.18,16.11-8.56,19.26c2.31,11.74,32.13,19.63,41.52,23.8l0,22.23L0,121.42L0,121.42z"
                                    />
                                </g>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                viewBox="0 0 512 511.99"
                                width="12px"
                                height="12px"
                                class="fill-green-600"
                            >
                                <path
                                    fill="#00AB42"
                                    fill-rule="nonzero"
                                    d="M256 0c70.68 0 134.68 28.67 181.01 74.99 46.32 46.32 74.99 110.32 74.99 181S483.33 390.68 437.01 437c-46.33 46.33-110.33 74.99-181.01 74.99-70.68 0-134.68-28.66-181.01-74.99C28.67 390.68 0 326.67 0 255.99c0-70.68 28.67-134.68 74.99-181C121.32 28.67 185.32 0 256 0z"
                                />
                                <path
                                    fill="#fff"
                                    d="M234.68 130.59h42.64c10.11 0 18.38 8.29 18.38 18.39v67.32h67.32c10.11 0 18.38 8.33 18.38 18.38v42.63c0 10.09-8.3 18.38-18.38 18.38H295.7v67.32c0 10.1-8.28 18.39-18.38 18.39h-42.64c-10.1 0-18.38-8.27-18.38-18.39v-67.32h-67.32c-10.08 0-18.38-8.26-18.38-18.38v-42.63c0-10.12 8.27-18.38 18.38-18.38h67.32v-67.32c0-10.12 8.27-18.39 18.38-18.39z"
                                />
                            </svg>
                        </MiniIcon>
                    </div>
                </div>

                <div
                    v-else-if="legendItem instanceof SectionItem"
                    class="flex-1"
                >
                    <h3
                        class="text-lg font-bold"
                        v-if="
                            legendItem.infoType === InfoType.Title &&
                            legendItem.content
                        "
                    >
                        {{ legendItem.content }}
                    </h3>
                    <h3 v-else-if="legendItem.infoType === InfoType.Title">
                        {{ legendItem.name }}
                    </h3>
                    <p v-else-if="legendItem.infoType === InfoType.Text">
                        {{ legendItem.content }}
                    </p>
                    <img
                        v-else-if="legendItem.infoType === InfoType.Image"
                        :src="legendItem.content"
                        alt="InfoType image not found :("
                    />
                    <div
                        v-else-if="legendItem.infoType === InfoType.Markdown"
                        class="ramp-markdown"
                        v-html="markdownToHtml(legendItem.content)"
                    ></div>
                    <component
                        v-else
                        :is="`${legendItem.uid}-info-section`"
                    ></component>
                </div>

                <!-- reload for error'd items -->
                <div
                    class="relative"
                    v-if="legendItem.type === LegendType.Error"
                >
                    <button
                        type="button"
                        class="text-gray-500 hover:text-black"
                        :content="t('legend.layer.controls.reload')"
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                        @click.stop="reloadIfReady"
                        :aria-label="t('legend.layer.controls.reload')"
                    >
                        <div class="flex p-8">
                            <svg
                                class="inline-block fill-current w-18 h-18"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>

                <!-- Button only appears for loading or errored LayerItems -->
                <!-- Morphs depending on state. Cancel for loading, Remove for Errored -->
                <div
                    v-if="
                        legendItem.type !== LegendType.Item &&
                        legendItem instanceof LayerItem
                    "
                    class="relative"
                >
                    <button
                        type="button"
                        class="text-gray-500 hover:text-black"
                        :content="
                            legendItem.type === LegendType.Error
                                ? t('legend.layer.controls.remove')
                                : t('legend.layer.controls.cancel')
                        "
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                        @click.stop="cancelOrRemoveLayer"
                        :aria-label="
                            legendItem.type === LegendType.Error
                                ? t('legend.layer.controls.remove')
                                : t('legend.layer.controls.cancel')
                        "
                    >
                        <div class="flex p-8">
                            <svg
                                v-if="
                                    legendItem.type === LegendType.Placeholder
                                "
                                class="fill-current w-18 h-18"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 352 512"
                            >
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                />
                            </svg>
                            <svg
                                v-else
                                class="inline-block fill-current w-18 h-18 mr-1"
                                viewBox="0 1 23 22"
                            >
                                <path
                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>

                <!-- options dropdown menu -->
                <legend-options
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem
                    "
                    :legendItem="legendItem"
                />

                <!-- offscale icon -->
                <div
                    class="relative p-4 cursor-default"
                    :content="t('legend.layer.offscale')"
                    v-tippy="{
                        placement: 'top-start'
                    }"
                    @mouseover.stop
                    @click.stop
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem &&
                        legendItem.layerOffscale
                    "
                    focus-icon
                >
                    <svg
                        class="inline-block fill-gray-400 w-18 h-18"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"
                        ></path>
                    </svg>
                </div>

                <!-- data only icon -->
                <div
                    class="relative p-4 cursor-default"
                    :content="t('legend.layer.data.only')"
                    v-tippy="{
                        placement: 'top-end'
                    }"
                    @mouseover.stop
                    @click.stop
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem &&
                        !legendItem.layer?.mapLayer
                    "
                    focus-icon
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 -960 960 960"
                        width="18"
                        class="inline-block fill-gray-400"
                    >
                        <path
                            d="m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z"
                        />
                    </svg>
                </div>

                <!-- zoom button for offscale layers -->
                <div
                    class="relative top-1"
                    v-if="
                        legendItem.type === LegendType.Item &&
                        legendItem instanceof LayerItem &&
                        legendItem.layerOffscale
                    "
                >
                    <button
                        type="button"
                        class="p-4"
                        :content="t('legend.layer.zoomToVisible')"
                        v-tippy="{
                            placement: 'top-start'
                        }"
                        @mouseover.stop
                        @click.stop="
                            (legendItem as LayerItem).layer.zoomToVisibleScale()
                        "
                    >
                        <svg
                            class="m-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                            width="18"
                        >
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            ></path>
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
                        </svg>
                    </button>
                </div>

                <!-- visibility -->
                <checkbox
                    v-else-if="
                        legendItem.type === LegendType.Item &&
                        controlAvailable(LegendControl.Visibility)
                    "
                    :checked="legendItem.visibility"
                    :value="legendItem as LegendItem"
                    :isRadio="legendItem.parent && legendItem.parent.exclusive"
                    :legendItem="legendItem"
                    :disabled="
                        legendItem instanceof LayerItem &&
                        !legendItem.layerControlAvailable(
                            LayerControl.Visibility
                        )
                    "
                    :label="isGroup ? 'Group' : 'Layer'"
                />
            </div>
            <div
                v-if="
                    legendItem.type === LegendType.Placeholder ||
                    (legendItem instanceof LayerItem &&
                        legendItem.layerRedrawing &&
                        legendItem.visibility)
                "
                class="h-3 w-full absolute bottom-0"
            >
                <div class="progress-line"></div>
            </div>
        </div>
        <!-- Symbology Stack Section -->
        <div
            v-if="
                legendItem instanceof LayerItem && legendItem.symbologyExpanded
            "
            v-focus-item
            class="symbology-stack default-focus-style"
        >
            <div v-if="symbologyStack.length > 0">
                <!-- display each symbol -->
                <p
                    v-if="
                        legendItem instanceof LayerItem &&
                        legendItem.description
                    "
                    class="m-5"
                >
                    {{ legendItem.description }}
                </p>
                <div class="m-5" v-for="item in symbologyStack" :key="item.uid">
                    <!-- for WMS layers and image render styles -->
                    <div
                        v-if="
                            (item.imgUrl &&
                                legendItem.symbologyRenderStyle === 'images') ||
                            (!item.imgUrl && layerType === 'ogc-wms')
                        "
                        class="items-center grid-cols-1"
                    >
                        <div
                            v-if="item.imgUrl"
                            class="symbologyIcon w-full p-5"
                        >
                            <img class="max-w-full" :src="item.imgUrl" />
                        </div>
                        <div
                            v-else-if="item.imgHeight"
                            class="symbologyIcon w-full p-5"
                            v-html="getLegendGraphic(item)"
                        ></div>
                        <div
                            v-if="item.label"
                            class="flex-1 p-5 bg-black-75 text-white"
                            v-truncate
                        >
                            <span>{{ item.label }}</span>
                            <checkbox
                                v-if="
                                    (!item.imgUrl &&
                                        symbologyStack.length > 1) ||
                                    (item.imgUrl && item.definitionClause)
                                "
                                class="float-right"
                                :value="item"
                                :legendItem="legendItem"
                                :checked="item.visibility"
                                :disabled="
                                    !controlAvailable(LayerControl.Visibility)
                                "
                                label="Symbol"
                            />
                        </div>
                    </div>
                    <!-- for non-WMS layers -->
                    <div v-else class="flex items-center">
                        <div v-if="item.imgUrl" class="symbologyIcon">
                            <img class="w-32 h-32" :src="item.imgUrl" />
                        </div>
                        <div v-else-if="item.svgcode" class="symbologyIcon">
                            <span v-html="item.svgcode"></span>
                        </div>
                        <div class="flex-1 ml-15" v-truncate>
                            {{ item.label }}
                        </div>
                        <checkbox
                            v-if="
                                modifiableLayer &&
                                legendItem.layer.supportsFeatures &&
                                ((!item.imgUrl && symbologyStack.length > 1) ||
                                    (item.imgUrl && item.definitionClause))
                            "
                            :value="item"
                            :legendItem="legendItem"
                            :checked="item.visibility"
                            :disabled="
                                !controlAvailable(LayerControl.Visibility)
                            "
                            label="Symbol"
                        />
                    </div>
                </div>
            </div>
            <div v-if="!symbologyStackLoaded">
                <!-- display loading text if the stack hasn't loaded yet -->
                <div class="flex p-5 ml-48" v-truncate>
                    <div
                        class="relative animate-spin spinner h-20 w-20 mr-10 pt-2"
                        v-if="isAnimationEnabled"
                    ></div>
                    <div class="flex-1 text-gray-500" v-truncate>
                        <span>{{ t('legend.symbology.loading') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Display children of the group -->
        <div
            class="legend-group border-l-2 ml-4 pl-4"
            v-if="legendItem.expanded"
        >
            <item
                v-for="item in legendItem.children"
                :legendItem="item"
                :key="item.uid"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalEvents, InstanceAPI } from '@/api';
import type { LegendSymbology, RampLayerConfig } from '@/geo/api';
import { LayerControl } from '@/geo/api';
import { useLayerStore } from '@/stores/layer';
import to from 'await-to-js';
import { marked } from 'marked';
import type { PropType } from 'vue';
import { computed, inject, ref, toRaw, watch } from 'vue';
import { LayerItem } from '../store/layer-item';
import { LegendControl, LegendType } from '../store/legend-item';
import { InfoType, SectionItem } from '../store/section-item';
import Checkbox from './checkbox.vue';
import LegendOptions from './legend-options.vue';
import { usePanelStore } from '@/stores/panel';
import { useI18n } from 'vue-i18n';

// eslint doesn't recognize <symbology-stack> usage
// eslint-disable-next-line
import SymbologyStack from './symbology-stack.vue';

// eslint-disable-next-line
import MiniIcon from './mini-icon.vue';

// eslint-disable-next-line
import LayerTypeIcon from './layertype-icon.vue';

import type { LegendAPI } from '../api/legend';
import type { LegendItem } from '../store/legend-item';

const layerStore = useLayerStore();
const panelStore = usePanelStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const el = ref();

const props = defineProps({
    legendItem: {
        type: Object as PropType<LegendItem | LayerItem | SectionItem>,
        required: true
    }
});

const mobileMode = ref(panelStore.mobileView);
const layerConfigs = computed(() => layerStore.layerConfigs);
const symbologyStack = ref<Array<LegendSymbology>>([]); // ref instead of reactive to maintain reactivity after promise
const symbologyStackLoaded = ref<boolean>(false);
const hovered = ref(false);

/**
 * Get the type of layer
 */
const layerType = computed((): string | undefined => {
    return props.legendItem instanceof LayerItem
        ? toRaw(props.legendItem!.layer)?.layerType
        : '';
});

/**
 * Determine if the layer is modifiable
 */
const modifiableLayer = computed((): boolean => {
    return (
        props.legendItem instanceof LayerItem &&
        toRaw(props.legendItem!.layer)?.canModifyLayer
    );
});

/**
 * Get animation enabled status
 */
const isAnimationEnabled = computed((): boolean => {
    return iApi.animate;
});

/**
 * Get if this item is a group (has at least one child)
 */
const isGroup = computed((): boolean => {
    return (
        props.legendItem.children.length > 0 ||
        // TODO: Determine why Vue reactivity isn't picking updates to the children property of the parent.
        // isGroup is being called on the parent before the children are mapped in legend.ts. After they're mapped, isGroup isn't called again.
        (props.legendItem instanceof LayerItem &&
            toRaw(props.legendItem!.layer)?.sublayers.length > 0)
    );
});

/**
 * Designate between layer controls and legend controls
 */
const controlAvailable = (
    control: LegendControl | LayerControl
): boolean | undefined => {
    if (
        control === LegendControl.Expand ||
        control === LegendControl.Visibility
    )
        return props.legendItem.controlAvailable(control as LegendControl);
    else
        return (props.legendItem as LayerItem).layerControlAvailable(
            control as LayerControl
        );
};

const markdownToHtml = (md: string) => {
    return marked(md);
};

const toggleExpand = () => {
    if (
        props.legendItem.children.length === 0 ||
        !controlAvailable(LegendControl.Expand)
    ) {
        return;
    }
    props.legendItem.toggleExpanded();
    iApi.updateAlert(
        t(
            `legend.alert.group${
                props.legendItem.expanded ? 'Expanded' : 'Collapsed'
            }`
        )
    );
};
/**
 * Display symbology stack for the layer.
 */
const toggleSymbology = (): void => {
    if (controlAvailable(LayerControl.Symbology)) {
        const expanded = (props.legendItem as LayerItem).toggleSymbology();
        iApi.updateAlert(
            t(`legend.alert.symbology${expanded ? 'Expanded' : 'Collapsed'}`)
        );
    }
};

/**
 * Toggles data table panel to open/close for the LegendItem.
 */
const toggleGrid = (): void => {
    if (controlAvailable(LayerControl.Datatable) && getDatagridExists()) {
        iApi.event.emit(
            GlobalEvents.GRID_TOGGLE,
            (props.legendItem as LayerItem).layer
        );
    }
};

/**
 * Returns a span containing the resized legend graphic.
 */
const getLegendGraphic = (item: any): string | undefined => {
    const span = document.createElement('span');
    span.innerHTML = item.svgcode;
    const svg = span.firstElementChild;
    // The legend graphic will display either in its original size, or resized to fit the width of the legend item.
    svg?.classList.add('max-w-full');
    svg?.classList.add('h-full');
    svg?.setAttribute('height', item.imgHeight);
    svg?.setAttribute('width', item.imgWidth);
    return span.outerHTML;
};

/**
 * Indicates if the data grid fixture has been added
 */
const getDatagridExists = (): boolean => {
    try {
        return iApi.fixture.exists('grid');
    } catch (e) {
        return false;
    }
};

/**
 * Reloads layer if its "ready" to be reloaded.
 * If a layer has not been cancelled, it is ready to be reloaded.
 * If it has been cancelled by the user, then we wait for any currently in progress load to finish.
 */
const reloadIfReady = () => {
    // reload legend item state back to placeholder state
    props.legendItem.reload();
    if ((props.legendItem as LayerItem)._loadCancelled) {
        const readyWatcher = setInterval(() => {
            if ((props.legendItem as LayerItem).layer) {
                Promise.allSettled([
                    (props.legendItem as LayerItem).layer.loadPromise
                ]).then(() => {
                    clearInterval(readyWatcher);
                    reloadLayer();
                });
            }
        }, 250);
    } else {
        reloadLayer();
    }
};
/**
 * Reloads a layer on the map.
 */
const reloadLayer = () => {
    // want the animation to play for half a second because a reload can fail "instantly", making it look like nothing happened to the user
    setTimeout(() => {
        (props.legendItem as LayerItem)._loadCancelled = false;
        // call reload on layer if it exists
        if ((props.legendItem as LayerItem).layer !== undefined) {
            toRaw((props.legendItem as LayerItem).layer!).reload();
        } else {
            // otherwise attempt to re-create layer with layer config
            const layerConfig =
                (props.legendItem as LayerItem).layerIdx === undefined ||
                (props.legendItem as LayerItem).layerIdx === -1
                    ? layerConfigs.value.find(
                          (lc: RampLayerConfig) =>
                              lc.id === (props.legendItem as LayerItem).layerId
                      )
                    : layerConfigs.value.find(
                          (lc: RampLayerConfig) =>
                              lc.id ===
                              (props.legendItem as LayerItem).parentLayerId
                      );
            if (layerConfig !== undefined) {
                recreateLayer(layerConfig);
            }
        }
        // catch error if reload fails
        props.legendItem.loadPromise.catch(() => {
            console.error('Failed to reload layer -', props.legendItem.name);
        });
    }, 500);
};

/**
 * Attempt to recreate and instantiate layer from config.
 * Used when an initial layer failed to attach itself to the legend item
 */
const recreateLayer = async (layerConfig: RampLayerConfig) => {
    try {
        // check if the layer exists in store.
        // if so, attempt to reload.
        const checkLayer = iApi.geo.layer.getLayer(layerConfig.id);
        if (checkLayer) {
            const [reloadErr] = await to(toRaw(checkLayer).reload());
            if (reloadErr) {
                throw new Error();
            } else {
                return checkLayer;
            }
        } else {
            // try to re-create new layer based on layerConfig
            // same code to how layers are initialized when layer config array changes, expose this as layer API method?
            const layer = iApi.geo.layer.createLayer(layerConfig);

            await iApi.geo.map.addLayer(layer!).catch(() => {
                throw new Error();
            });

            return layer;
        }
    } catch {
        return;
    }
};

/**
 * Dual use method, leveraged for layers not in a loaded, active state.
 * For a loading layer, will "Cancel" it. This puts it in the error state but keeps it registered.
 * For an errored layer, will "Remove" it. Layer deleted from legend, map, and unregistered.
 */
const cancelOrRemoveLayer = () => {
    const layerItem: LayerItem = toRaw(props.legendItem as LayerItem); // so that typescript doesn't yell in the whole method
    if (layerItem.type === LegendType.Error) {
        // layer in error state, remove layer permanently
        // layer could appear in store later, so we need to keep checking if its there

        props.legendItem.toggleHidden(true); // temporarily hide item until we can remove it

        const removalWatcher = setInterval(() => {
            // layer is gone from everywhere, so we are done
            if (layerItem.layer && layerItem.layer.layerExists) {
                // stop the interval
                clearInterval(removalWatcher);

                // layer is now there, time to remove!
                iApi.geo.map.removeLayer(layerItem.layer);

                // remove layer config from store
                layerStore.removeLayerConfig(layerItem.layerId);

                // remove layer item from legend
                iApi.fixture
                    .get<LegendAPI>('legend')
                    ?.removeLayerItem(layerItem.layerId);
            }
        }, 250);
    } else {
        // layer in loading state, "cancel" layer
        // this puts it in error state. user can then reload or remove
        props.legendItem.error();
        (props.legendItem as LayerItem)._loadCancelled = true;
        // if a sublayer or parent layer was cancelled, cancel the parent layer and all other sublayers.
        // need to keep polling for the parent layer since some sublayers may not be in the config (stuff that came from a group)

        // TODO: revisit the need for this watcher. Now that every registered layer is returned by allLayers, it should always
        //       find the parent first find(). Unless I'm mis-understanding what parentLayerId is and that can be a
        //       temporary group node thing. Possibly .parentLayerId on an MIL group isn't set until after load? Sorta makes sense.
        const cancelWatcher = setInterval(() => {
            const parentLayer = iApi.geo.layer
                .allLayers()
                .find(
                    l =>
                        l.id === layerItem.parentLayerId ||
                        l.id === layerItem.layerId
                );
            if (parentLayer) {
                clearInterval(cancelWatcher);
                const layerItemToCancel = iApi.fixture
                    .get<LegendAPI>('legend')
                    ?.getLayerItem(parentLayer);
                if (layerItemToCancel) {
                    layerItemToCancel.error();
                    layerItemToCancel._loadCancelled = true;
                }
                parentLayer.sublayers?.forEach(sl => {
                    const sublayerItemToCancel = iApi.fixture
                        .get<LegendAPI>('legend')
                        ?.getLayerItem(sl);
                    if (sublayerItemToCancel) {
                        sublayerItemToCancel.error();
                        sublayerItemToCancel._loadCancelled = true;
                    }
                });
            }
        }, 250);
    }
};

const loadSymbologyStack = () => {
    // load the symbology only when the layer is loaded
    props.legendItem.loadPromise
        .then(() => {
            symbologyStack.value = [];
            // Wait for symbology to load
            if (!(props.legendItem as LayerItem).layer) {
                // This should never happen because the layer is loaded before the legend item component is mounted
                console.warn(
                    'Attempted to mount legend item component with undefined layer'
                );
                return;
            }
            Promise.all(
                toRaw(
                    (props.legendItem as LayerItem).symbologyStack.map(
                        (item: LegendSymbology) => item.drawPromise
                    )
                )
            ).then(() => {
                symbologyStack.value = (
                    props.legendItem as LayerItem
                ).symbologyStack;

                // Mark the symbology stack as loaded.
                symbologyStackLoaded.value = true;
            });
        })
        .catch(() => {});
};

/**
 * Helper function needed to delay tooltips using the _tippy?.show() workaround
 */
const hover = (t: EventTarget) => {
    hovered.value = true;
    setTimeout(() => {
        //@ts-ignore
        if (hovered.value) mobileMode.value ? null : t._tippy?.show();
    }, 300);
};

if (props.legendItem instanceof LayerItem) {
    loadSymbologyStack();
    watch(
        () => (props.legendItem as LayerItem).symbologyStack,
        () => {
            loadSymbologyStack();
        }
    );
}
</script>

<style lang="scss" scoped>
.legend-group {
    transition: max-height 0.7s ease-in;
}
.expand-toggle {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rotate-180 {
    transform: rotate(-180deg);
}
@media (hover) {
    .loaded-item {
        @apply min-h-[39px];
        .options {
            @apply hidden;
        }
    }
    .loaded-item:hover {
        .options {
            @apply block;
        }
    }
}
.loaded-item:focus-within {
    .options {
        @apply block;
    }
}
.non-loaded-item {
    @apply px-5 py-5 pb-10 pr-0 align-middle;
}
.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
