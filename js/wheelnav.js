var sliceTransform, sliceTransformCustomization, colorpalette;
wheelnav = function(n, t, i, r) {
    var u, e, s, o, f;
    if (this.holderId = "wheel", n !== undefined && n !== null && (this.holderId = n), u = document.getElementById(n), (u === null || u === undefined) && (t === undefined || t === null)) return this;
    if (s = !0, t === undefined || t === null) {
        for (o = [], f = 0; f < u.children.length; f++) u.children[f].localName === "svg" && o.push(u.children[f]);
        for (f = 0; f < o.length; f++) u.removeChild(o[f]);
        i !== undefined && i !== null ? ((r === undefined || r === null) && (r = i), this.raphael = new Raphael(n, i, r), e = i) : (this.raphael = new Raphael(n), e = u.clientWidth);
        this.raphael.setViewBox(0, 0, this.raphael.width, this.raphael.height, !0)
    } else this.raphael = t, e = this.raphael.width, s = !1;
    return this.centerX = e / 2, this.centerY = e / 2, this.wheelRadius = e / 2, this.navAngle = 0, this.sliceAngle = null, this.titleRotateAngle = null, this.initTitleRotate = !1, this.clickModeRotate = !0, this.rotateRound = !1, this.rotateRoundCount = 0, this.clickModeSpreadOff = !1, this.animatetimeCalculated = !1, this.animateRepeatCount = 0, this.clockwise = !0, this.multiSelect = !1, this.hoverPercent = 1, this.selectedPercent = 1, this.clickablePercentMin = 0, this.clickablePercentMax = 1, this.currentPercent = null, this.cssMode = !1, this.selectedToFront = !0, this.selectedNavItemIndex = 0, this.navItemCount = 0, this.navItemCountLabeled = !1, this.navItemCountLabelOffset = 0, this.navItems = [], this.navItemsEnabled = !0, this.animateFinishFunction = null, this.navItemsContinuous = !1, this.navItemsCentered = !0, this.colors = colorpalette.defaultpalette, this.titleSpreadScale = null, this.spreaderEnable = !1, this.spreaderRadius = 20, this.spreaderStartAngle = 0, this.spreaderSliceAngle = 360, this.spreaderPathFunction = spreaderPath().PieSpreader, this.spreaderPathCustom = null, this.spreaderInPercent = 1, this.spreaderOutPercent = 1, this.spreaderInTitle = "+", this.spreaderOutTitle = "-", this.spreaderTitleFont = null, this.spreaderPathInAttr = null, this.spreaderPathOutAttr = null, this.spreaderTitleInAttr = null, this.spreaderTitleOutAttr = null, this.spreaderInTitleWidth = null, this.spreaderInTitleHeight = null, this.spreaderOutTitleWidth = null, this.spreaderOutTitleHeight = null, this.minPercent = .01, this.maxPercent = 1, this.initPercent = 1, this.markerEnable = !1, this.markerPathFunction = markerPath().TriangleMarker, this.markerPathCustom = null, this.currentClick = 0, this.animateLocked = !1, this.slicePathAttr = null, this.sliceHoverAttr = null, this.sliceSelectedAttr = null, this.titleFont = "100 24px Impact, Charcoal, sans-serif", this.titleAttr = null, this.titleHoverAttr = null, this.titleSelectedAttr = null, this.titleWidth = null, this.titleHeight = null, this.titleHoverWidth = null, this.titleHoverHeight = null, this.titleSelectedWidth = null, this.titleSelectedHeight = null, this.linePathAttr = null, this.lineHoverAttr = null, this.lineSelectedAttr = null, this.slicePathCustom = null, this.sliceClickablePathCustom = null, this.sliceSelectedPathCustom = null, this.sliceHoverPathCustom = null, this.sliceInitPathCustom = null, this.sliceTransformCustom = null, this.sliceSelectedTransformCustom = null, this.sliceHoverTransformCustom = null, this.sliceInitTransformCustom = null, this.animateeffect = null, this.animatetime = null, this.slicePathFunction = slicePath().PieSlice !== undefined ? slicePath().PieSlice : slicePath().NullSlice, this.sliceClickablePathFunction = null, this.sliceTransformFunction = null, this.sliceSelectedPathFunction = null, this.sliceSelectedTransformFunction = null, this.sliceHoverPathFunction = null, this.sliceHoverTransformFunction = null, this.sliceInitPathFunction = null, this.sliceInitTransformFunction = null, this.parseWheel(u), this
};
wheelnav.prototype.initWheel = function(n) {
    var u, r, t;
    for (this.styleWheel(), this.navItemCount === 0 ? (n !== undefined && n !== null && Array.isArray(n) || (n = ["title-0", "title-1", "title-2", "title-3"]), this.navItemCount = n.length) : n = null, i = 0; i < this.navItemCount; i++) r = "", r = this.navItemCountLabeled ? (i + this.navItemCountLabelOffset).toString() : n !== null ? n[i] : "", u = new wheelnavItem(this, r, i), this.navItems.push(u);
    for (t = 0, i = 0; i < this.navItems.length; i++) this.navItems[i].fillAttr = this.colors[t], t++, t === this.colors.length && (t = 0)

};
wheelnav.prototype.createWheel = function(n, t) {
    for (this.currentPercent === null && (this.currentPercent = t ? this.minPercent : this.maxPercent), this.navItems.length === 0 && this.initWheel(n), this.selectedNavItemIndex !== null && (this.navItems[this.selectedNavItemIndex].selected = !0), i = 0; i < this.navItemCount; i++) this.navItems[i].createNavItem();
    return this.spreader = new spreader(this), this.marker = new marker(this), this.refreshWheel(), t !== undefined && this.spreadWheel(), this
};
wheelnav.prototype.refreshWheel = function(n) {
    for (i = 0; i < this.navItemCount; i++) {
        var t = this.navItems[i];
        t.setWheelSettings(n);
        t.refreshNavItem(n)
    }
    this.marker.setCurrentTransform();
    this.spreader.setCurrentTransform()
};
wheelnav.prototype.navigateWheel = function(n) {
    var t, r, u;
    for (this.animateUnlock(!0), this.clickModeRotate && (this.animateLocked = !0), i = 0; i < this.navItemCount; i++) t = this.navItems[i], t.hovered = !1, i === n ? this.multiSelect ? t.selected = !t.selected : (t.selected = !0, this.selectedNavItemIndex = i) : this.multiSelect || (t.selected = !1), this.clickModeRotate && (r = this.navItems[n].navAngle - this.navItems[this.currentClick].navAngle, this.rotateRound && (this.clockwise && r < 0 && (r = 360 + r), !this.clockwise && r > 0 && (r = r - 360)), t.currentRotateAngle -= r, u = this.animatetime != null ? this.animatetime : 1500, this.animatetimeCalculated && n !== this.currentClick && (t.animatetime = u * (Math.abs(r) / 360)), this.rotateRoundCount > 0 && (this.clockwise ? t.currentRotateAngle -= this.rotateRoundCount * 360 : t.currentRotateAngle += this.rotateRoundCount * 360, t.animatetime = u * (this.rotateRoundCount + 1)));
    for (i = 0; i < this.navItemCount; i++) t = this.navItems[i], t.setCurrentTransform(!0, !0), t.refreshNavItem();
    this.currentClick = n;
    this.clickModeSpreadOff ? (this.currentPercent = this.maxPercent, this.spreadWheel()) : (n === null || this.clickModeRotate ? this.marker.setCurrentTransform() : this.marker.setCurrentTransform(this.navItems[this.currentClick].navAngle), this.spreader.setCurrentTransform(!0))
};
wheelnav.prototype.spreadWheel = function() {
    for (this.animateUnlock(!0), this.animateLocked = !0, this.currentPercent = this.currentPercent === this.maxPercent || this.currentPercent === null ? this.minPercent : this.maxPercent, i = 0; i < this.navItemCount; i++) {
        var n = this.navItems[i];
        n.hovered = !1;
        n.setCurrentTransform(!0, !1)
    }
    return this.marker.setCurrentTransform(), this.spreader.setCurrentTransform(), this
};
wheelnav.prototype.animateUnlock = function(n, t) {
    var i, r;
    if (n !== undefined && n === !0)
        for (i = 0; i < this.navItemCount; i++) this.navItems[i].navSliceUnderAnimation = !1, this.navItems[i].navTitleUnderAnimation = !1, this.navItems[i].navLineUnderAnimation = !1, this.navItems[i].navSlice.stop(), this.navItems[i].navLine.stop(), this.navItems[i].navTitle.stop();
    else {
        for (r = 0; r < this.navItemCount; r++)
            if (this.navItems[r].navSliceUnderAnimation === !0 || this.navItems[r].navTitleUnderAnimation === !0 || this.navItems[r].navLineUnderAnimation === !0) return;
        this.animateLocked = !1;
        this.animateFinishFunction !== null && t !== undefined && t === !0 && this.animateFinishFunction()
    }
};
wheelnav.prototype.setTooltips = function(n) {
    if (n !== undefined && n !== null && Array.isArray(n) && n.length <= this.navItems.length)
        for (var t = 0; t < n.length; t++) this.navItems[t].setTooltip(n[t])
};
wheelnav.prototype.getItemId = function(n) {
    return "wheelnav-" + this.holderId + "-item-" + n
};
wheelnav.prototype.getSliceId = function(n) {
    return "wheelnav-" + this.holderId + "-slice-" + n
};
wheelnav.prototype.getClickableSliceId = function(n) {
    return "wheelnav-" + this.holderId + "-clickableslice-" + n
};
wheelnav.prototype.getTitleId = function(n) {
    return "wheelnav-" + this.holderId + "-title-" + n
};
wheelnav.prototype.getLineId = function(n) {
    return "wheelnav-" + this.holderId + "-line-" + n
};
wheelnav.prototype.getSpreaderId = function() {
    return "wheelnav-" + this.holderId + "-spreader"
};
wheelnav.prototype.getSpreaderTitleId = function() {
    return "wheelnav-" + this.holderId + "-spreadertitle"
};
wheelnav.prototype.getMarkerId = function() {
    return "wheelnav-" + this.holderId + "-marker"
};
wheelnav.prototype.parseWheel = function(n) {
    var d, l, a, v, nt, tt, it, y, e, rt, o, p, w, ut, ft, u, s, t;
    if (n !== undefined && n !== null) {
        if (d = n.hasAttribute("data-wheelnav"), d) {
            var i = [],
                h = [],
                f = [],
                g = !1,
                c = n.getAttribute("data-wheelnav-slicepath");
            for (c !== null && slicePath()[c] !== undefined && (this.slicePathFunction = slicePath()[c]), l = n.getAttribute("data-wheelnav-colors"), l !== null && (this.colors = l.split(",")), a = n.getAttribute("data-wheelnav-wheelradius"), a !== null && (this.wheelRadius = Number(a)), v = n.getAttribute("data-wheelnav-navangle"), v !== null && (this.navAngle = Number(v)), nt = n.getAttribute("data-wheelnav-rotateoff"), nt !== null && (this.clickModeRotate = !1), tt = n.getAttribute("data-wheelnav-cssmode"), tt !== null && (this.cssMode = !0), it = n.getAttribute("data-wheelnav-spreader"), it !== null && (this.spreaderEnable = !0), y = n.getAttribute("data-wheelnav-spreaderradius"), y !== null && (this.spreaderRadius = Number(y)), e = n.getAttribute("data-wheelnav-spreaderpath"), e !== null && markerPath()[e] !== undefined && (this.spreaderPathFunction = spreaderPath()[e]), rt = n.getAttribute("data-wheelnav-marker"), rt !== null && (this.markerEnable = !0), o = n.getAttribute("data-wheelnav-markerpath"), o !== null && markerPath()[o] !== undefined && (this.markerPathFunction = markerPath()[o]), p = n.getAttribute("data-wheelnav-titlewidth"), p !== null && (this.titleWidth = Number(p)), w = n.getAttribute("data-wheelnav-titleheight"), w !== null && (this.titleHeight = Number(w)), ut = n.getAttribute("data-wheelnav-init"), ut !== null && (g = !0), t = 0; t < n.children.length; t++) {
                var b = n.children[t].getAttribute("data-wheelnav-navitemtext"),
                    r = n.children[t].getAttribute("data-wheelnav-navitemicon"),
                    k = n.children[t].getAttribute("data-wheelnav-navitemimg");
                if (b !== null || r !== null || k !== null) {
                    if (b !== null) i.push(b);
                    else if (r !== null) icon[r] !== undefined ? i.push(icon[r]) : i.push(r);
                    else if (k !== null) i.push("imgsrc:" + k);
                    else continue;
                    for (n.children[t].onmouseup !== undefined ? f.push(n.children[t].onmouseup) : f.push(null), ft = !1, u = 0; u < n.children[t].children.length; u++) n.children[t].children[u].getAttribute("href") !== undefined && h.push(n.children[t].children[u].getAttribute("href"));
                    ft || h.push(null)
                }
            }
            if (i.length > 0) {
                for (this.initWheel(i), t = 0; t < f.length; t++) this.navItems[t].navigateFunction = f[t], this.navItems[t].navigateHref = h[t];
                g || this.createWheel()
            }
        }
        for (s = [], t = 0; t < n.children.length; t++) n.children[t].localName !== "svg" && s.push(n.children[t]);
        for (t = 0; t < s.length; t++) n.removeChild(s[t])
    }
};
wheelnavItem = function(n, t, i) {
    return this.wheelnav = n, this.wheelItemIndex = i, this.itemIndex = n.clockwise ? i : -i, this.enabled = n.navItemsEnabled, this.selected = !1, this.hovered = !1, this.navItem = null, this.navSlice = null, this.navTitle = null, this.navLine = null, this.navClickableSlice = null, this.navSliceCurrentTransformString = null, this.navTitleCurrentTransformString = null, this.navLineCurrentTransformString = null, this.navSliceUnderAnimation = !1, this.navTitleUnderAnimation = !1, this.navLineUnderAnimation = !1, this.currentRotateAngle = 0, this.title = t === undefined ? null : t, this.titleHover = this.title, this.titleSelected = this.title, this.tooltip = null, this.fillAttr = "#CCC", this.titleFont = this.wheelnav.titleFont, this.navigateHref = null, this.navigateFunction = null, this.titleWidth = null, this.titleHeight = null, this.titleHoverWidth = null, this.titleHoverHeight = null, this.titleSelectedWidth = null, this.titleSelectedHeight = null, this.animateeffect = null, this.animatetime = null, this.sliceInitPathFunction = null, this.sliceClickablePathFunction = null, this.slicePathFunction = null, this.sliceSelectedPathFunction = null, this.sliceHoverPathFunction = null, this.sliceTransformFunction = null, this.sliceSelectedTransformFunction = null, this.sliceHoverTransformFunction = null, this.sliceInitTransformFunction = null, this.slicePathCustom = null, this.sliceClickablePathCustom = null, this.sliceSelectedPathCustom = null, this.sliceHoverPathCustom = null, this.sliceInitPathCustom = null, this.sliceTransformCustom = null, this.sliceSelectedTransformCustom = null, this.sliceHoverTransformCustom = null, this.sliceInitTransformCustom = null, this.initPercent = null, this.minPercent = null, this.maxPercent = null, this.hoverPercent = null, this.selectedPercent = null, this.clickablePercentMin = null, this.clickablePercentMax = null, this.titleSpreadScale = null, this.sliceAngle = null, this.styleNavItem(), this
};
wheelnavItem.prototype.createNavItem = function() {
    var r, n, t, u, e;
    this.setWheelSettings(!1);
    this.navigateHref !== null && (this.navigateFunction = function() {
        window.location.href = this.navigateHref
    });
    this.wheelnav.cssMode || (this.slicePathAttr.fill = this.fillAttr, this.sliceHoverAttr.fill = this.fillAttr, this.sliceSelectedAttr.fill = this.fillAttr);
    this.enabled || (this.wheelnav.cssMode || (this.slicePathAttr.cursor = "default", this.sliceHoverAttr.cursor = "default", this.titleAttr.cursor = "default", this.titleHoverAttr.cursor = "default", this.linePathAttr.cursor = "default", this.lineHoverAttr.cursor = "default"), this.sliceClickablePathAttr.cursor = "default", this.sliceClickableHoverAttr.cursor = "default");
    r = this.wheelItemIndex - 1;
    n = 360 / this.wheelnav.navItemCount;
    this.sliceAngle === null && (this.sliceAngle = 360 / this.wheelnav.navItemCount);
    this.wheelnav.clockwise ? this.wheelnav.navItemsContinuous ? this.baseAngle = this.itemIndex === 0 ? this.itemIndex * this.sliceAngle + (-this.sliceAngle / 2 + this.wheelnav.navAngle) : this.wheelnav.navItems[r].baseAngle + this.wheelnav.navItems[r].sliceAngle : this.wheelnav.navItemsCentered ? this.baseAngle = this.itemIndex * n + (-this.sliceAngle / 2 + this.wheelnav.navAngle) : (this.baseAngle = this.itemIndex * n + (-n / 2 + this.wheelnav.navAngle), this.currentRotateAngle += n / 2 - this.wheelnav.navItems[0].sliceAngle / 2) : this.wheelnav.navItemsContinuous ? this.baseAngle = this.itemIndex === 0 ? this.itemIndex * this.sliceAngle + (-this.sliceAngle / 2 + this.wheelnav.navAngle) : this.wheelnav.navItems[r].baseAngle - this.wheelnav.navItems[this.wheelItemIndex].sliceAngle : this.wheelnav.navItemsCentered ? this.baseAngle = this.itemIndex * n + (-this.sliceAngle / 2 + this.wheelnav.navAngle) : (this.baseAngle = this.itemIndex * n + (-n / 2 + this.wheelnav.navAngle) + (n - this.sliceAngle), this.currentRotateAngle -= n / 2 - this.wheelnav.navItems[0].sliceAngle / 2);
    this.navAngle = this.baseAngle + this.sliceAngle / 2;
    this.wheelnav.animatetimeCalculated && (this.animatetime = this.wheelnav.animatetime / this.wheelnav.navItemCount);
    this.initPathsAndTransforms();
    t = this.sliceInitPath;
    this.navSlice = this.wheelnav.raphael.path(t.slicePathString);
    this.navSlice.attr(this.slicePathAttr);
    this.navSlice.id = this.wheelnav.getSliceId(this.wheelItemIndex);
    this.navSlice.node.id = this.navSlice.id;
    this.navLine = this.wheelnav.raphael.path(t.linePathString);
    this.navLine.attr(this.linePathAttr);
    this.navLine.id = this.wheelnav.getLineId(this.wheelItemIndex);
    this.navLine.node.id = this.navLine.id;
    u = this.initNavTitle;
    this.navTitle = wheelnavTitle().isPathTitle(this.title) ? this.wheelnav.raphael.path(u.path) : wheelnavTitle().isImageTitle(this.title) ? this.wheelnav.raphael.image(u.src, t.titlePosX - this.titleWidth / 2, t.titlePosY - this.titleHeight / 2, this.titleWidth, this.titleHeight) : this.wheelnav.raphael.text(t.titlePosX, t.titlePosY, u.title);
    this.navTitle.attr(this.titleAttr);
    this.navTitle.id = this.wheelnav.getTitleId(this.wheelItemIndex);
    this.navTitle.node.id = this.navTitle.id;
    this.navSliceCurrentTransformString = "";
    this.initTransform.sliceTransformString !== "" && (this.navSliceCurrentTransformString += this.initTransform.sliceTransformString);
    this.navLineCurrentTransformString = "";
    this.initTransform.lineTransformString !== "" && (this.navLineCurrentTransformString += this.initTransform.lineTransformString);
    this.navTitleCurrentTransformString = "";
    this.navTitleCurrentTransformString += this.getTitleRotateString(this.wheelnav.initTitleRotate);
    this.initTransform.titleTransformString !== "" && (this.navTitleCurrentTransformString += this.initTransform.titleTransformString);
    this.wheelnav.currentPercent < .05 && (this.navTitleCurrentTransformString += ",s0.05");
    this.navTitleSizeTransform !== undefined && (this.navTitleCurrentTransformString += this.navTitleSizeTransform);
    this.navSlice.attr({
        transform: this.navSliceCurrentTransformString
    });
    this.navLine.attr({
        transform: this.navLineCurrentTransformString
    });
    this.navTitle.attr({
        transform: this.navTitleCurrentTransformString
    });
    this.navItem = this.wheelnav.raphael.set();
    this.sliceClickablePathFunction !== null ? (e = this.getCurrentClickablePath(), this.navClickableSlice = this.wheelnav.raphael.path(e.slicePathString).attr(this.sliceClickablePathAttr).toBack(), this.navClickableSlice.id = this.wheelnav.getClickableSliceId(this.wheelItemIndex), this.navClickableSlice.node.id = this.navClickableSlice.id, this.navItem.push(this.navSlice, this.navLine, this.navTitle, this.navClickableSlice)) : this.navItem.push(this.navSlice, this.navLine, this.navTitle);
    this.setTooltip(this.tooltip);
    this.navItem.id = this.wheelnav.getItemId(this.wheelItemIndex);
    var o = this.wheelnav,
        i = this,
        f = this.wheelItemIndex;
    this.enabled && (this.navItem.mouseup(function() {
        i.navigateFunction !== null && i.navigateFunction();
        o.navigateWheel(f)
    }), this.navItem.mouseover(function() {
        i.hovered !== !0 && i.hoverEffect(f, !0)
    }), this.navItem.mouseout(function() {
        i.hovered = !1;
        i.hoverEffect(f, !1)
    }));
    this.setCurrentTransform(!0, !1)
};
wheelnavItem.prototype.hoverEffect = function(n, t) {
    this.wheelnav.animateLocked === !1 && (t && (this.selected || (this.hovered = !0)), this.refreshNavItem(), (this.hoverPercent !== 1 || this.sliceHoverPathFunction !== null || this.sliceHoverTransformFunction !== null || this.titleHover !== this.title || this.titleHoverWidth !== this.titleWidth || this.titleHoverHeight !== this.titleHeight) && this.setCurrentTransform(!1, !1), this.wheelnav.marker.setCurrentTransform(), this.wheelnav.spreader.setCurrentTransform(!0))
};
wheelnavItem.prototype.setCurrentTransform = function(n, t) {
    var h, c, l, w, a, r, f, e, o, u, v, y, p, s;
    if (!this.wheelnav.clickModeRotate || !this.navSliceUnderAnimation && !this.navTitleUnderAnimation && !this.navLineUnderAnimation)
        if (n !== undefined && n === !0 && (this.navSliceUnderAnimation = !0, this.navTitleUnderAnimation = !0, this.navLineUnderAnimation = !0), this.navSliceCurrentTransformString = "", this.wheelnav.clickModeRotate && (this.navSliceCurrentTransformString += this.getItemRotateString()), this.selected ? this.selectTransform.sliceTransformString !== undefined && (this.navSliceCurrentTransformString += this.selectTransform.sliceTransformString) : this.hovered && this.hoverTransform.sliceTransformString !== undefined && (this.navSliceCurrentTransformString += this.hoverTransform.sliceTransformString), this.sliceTransform.sliceTransformString !== undefined && (this.navSliceCurrentTransformString += this.sliceTransform.sliceTransformString), this.navLineCurrentTransformString = "", this.wheelnav.clickModeRotate && (this.navLineCurrentTransformString += this.getItemRotateString()), this.selected ? this.selectTransform.lineTransformString !== undefined && (this.navLineCurrentTransformString += this.selectTransform.lineTransformString) : this.hovered && this.hoverTransform.lineTransformString !== undefined && (this.navLineCurrentTransformString += this.hoverTransform.lineTransformString), this.sliceTransform.lineTransformString !== undefined && (this.navLineCurrentTransformString += this.sliceTransform.lineTransformString), this.navTitleCurrentTransformString = "", this.navTitleCurrentTransformString += this.getTitleRotateString(!0), this.selected ? (this.navTitleSizeSelectedTransform !== undefined && (this.navTitleCurrentTransformString += this.navTitleSizeSelectedTransform), this.navTitleCurrentTransformString += this.selectTransform.titleTransformString === "" || this.selectTransform.titleTransformString === undefined ? ",s1" : "," + this.selectTransform.titleTransformString, this.wheelnav.currentPercent < .05 && (this.navTitleCurrentTransformString += ",s0.05")) : this.hovered ? (this.navTitleSizeHoverTransform !== undefined && (this.navTitleCurrentTransformString += this.navTitleSizeHoverTransform), this.navTitleCurrentTransformString += this.hoverTransform.titleTransformString === "" || this.hoverTransform.titleTransformString === undefined ? ",s1" : "," + this.hoverTransform.titleTransformString) : this.wheelnav.currentPercent < .05 ? this.navTitleCurrentTransformString += ",s0.05" : this.titleSpreadScale ? this.navTitleCurrentTransformString += ",s" + this.wheelnav.currentPercent : (this.navTitleSizeTransform !== undefined && (this.navTitleCurrentTransformString += this.navTitleSizeTransform), this.navTitleCurrentTransformString += this.sliceTransform.titleTransformString === "" || this.sliceTransform.titleTransformString === undefined ? ",s1" : "," + this.sliceTransform.titleTransformString), h = this.getCurrentPath(), c = {}, c = {
                path: h.slicePathString,
                transform: this.navSliceCurrentTransformString
            }, l = {}, this.sliceClickablePathFunction !== null && (w = this.getCurrentClickablePath(), l = {
                path: w.slicePathString,
                transform: this.navSliceCurrentTransformString
            }), a = {}, a = {
                path: h.linePathString,
                transform: this.navLineCurrentTransformString
            }, r = this.getCurrentTitle(), f = {}, wheelnavTitle().isPathTitle(r.title) ? f = {
                path: r.path,
                transform: this.navTitleCurrentTransformString
            } : wheelnavTitle().isImageTitle(r.title) ? (f = {
                x: r.x,
                y: r.y,
                width: r.width,
                height: r.height,
                transform: this.navTitleCurrentTransformString
            }, this.navTitle.attr({
                src: r.src
            })) : (f = {
                x: r.x,
                y: r.y,
                transform: this.navTitleCurrentTransformString
            }, r.title !== null && this.navTitle.attr({
                text: r.title
            })), e = this, o = this.wheelnav, this.animSlice = Raphael.animation(c, this.animatetime, this.animateeffect, function() {
                e.navSliceUnderAnimation = !1;
                o.animateUnlock(!1, t)
            }), this.animLine = Raphael.animation(a, this.animatetime, this.animateeffect, function() {
                e.navLineUnderAnimation = !1;
                o.animateUnlock(!1, t)
            }), this.animTitle = Raphael.animation(f, this.animatetime, this.animateeffect, function() {
                e.navTitleUnderAnimation = !1;
                o.animateUnlock(!1, t)
            }), this.navClickableSlice !== null && (this.animClickableSlice = Raphael.animation(l, this.animatetime, this.animateeffect)), u = this.wheelnav.animateRepeatCount, n !== undefined && n === !0) {
            if (this.wheelItemIndex === this.wheelnav.navItemCount - 1) {
                for (i = 0; i < this.wheelnav.navItemCount; i++) v = this.wheelnav.navItems[i], v.navSlice.animate(v.animSlice.repeat(u));
                for (i = 0; i < this.wheelnav.navItemCount; i++) y = this.wheelnav.navItems[i], y.navLine.animate(y.animLine.repeat(u));
                for (i = 0; i < this.wheelnav.navItemCount; i++) p = this.wheelnav.navItems[i], p.navTitle.animate(p.animTitle.repeat(u));
                if (this.wheelnav.sliceClickablePathFunction !== null)
                    for (i = 0; i < this.wheelnav.navItemCount; i++) s = this.wheelnav.navItems[i], s.navClickableSlice !== null && s.navClickableSlice.animate(s.animClickableSlice.repeat(u))
            }
        } else this.navSlice.animate(this.animSlice.repeat(u)), this.navLine.animate(this.animLine.repeat(u)), this.navTitle.animate(this.animTitle.repeat(u)), this.navClickableSlice !== null && this.navClickableSlice.animate(this.animClickableSlice.repeat(u))
};
wheelnavItem.prototype.setTooltip = function(n) {
    n !== null && this.navItem.attr({
        title: n
    })
};
wheelnavItem.prototype.refreshNavItem = function(n) {
    this.selected ? (this.navSlice.attr(this.sliceSelectedAttr), this.navLine.attr(this.lineSelectedAttr), this.navTitle.attr(this.titleSelectedAttr), this.navClickableSlice !== null && this.navClickableSlice.attr(this.sliceClickableSelectedAttr), this.wheelnav.selectedToFront ? (this.navSlice.toFront(), this.navLine.toFront(), this.navTitle.toFront(), this.navClickableSlice !== null && this.navClickableSlice.toFront()) : (this.navClickableSlice !== null && this.navClickableSlice.toBack(), this.navTitle.toBack(), this.navLine.toBack(), this.navSlice.toBack())) : this.hovered ? (this.navSlice.attr(this.sliceHoverAttr).toFront(), this.navLine.attr(this.lineHoverAttr).toFront(), this.navTitle.attr(this.titleHoverAttr).toFront(), this.navClickableSlice !== null && this.navClickableSlice.attr(this.sliceClickableHoverAttr).toFront()) : (this.navSlice.attr(this.slicePathAttr), this.navLine.attr(this.linePathAttr), this.navTitle.attr(this.titleAttr), this.navClickableSlice !== null && this.navClickableSlice.attr(this.sliceClickablePathAttr), this.navClickableSlice !== null && this.navClickableSlice.toBack(), this.navTitle.toBack(), this.navLine.toBack(), this.navSlice.toBack());
    n !== undefined && n === !0 && (this.initPathsAndTransforms(), this.setCurrentTransform(!1, !1))
};
wheelnavItem.prototype.setWheelSettings = function(n) {
    this.wheelnav.slicePathAttr !== null && (this.slicePathAttr = JSON.parse(JSON.stringify(this.wheelnav.slicePathAttr)));
    this.wheelnav.sliceHoverAttr !== null && (this.sliceHoverAttr = JSON.parse(JSON.stringify(this.wheelnav.sliceHoverAttr)));
    this.wheelnav.sliceSelectedAttr !== null && (this.sliceSelectedAttr = JSON.parse(JSON.stringify(this.wheelnav.sliceSelectedAttr)));
    this.wheelnav.titleAttr !== null && (this.titleAttr = JSON.parse(JSON.stringify(this.wheelnav.titleAttr)));
    this.wheelnav.titleHoverAttr !== null && (this.titleHoverAttr = JSON.parse(JSON.stringify(this.wheelnav.titleHoverAttr)));
    this.wheelnav.titleSelectedAttr !== null && (this.titleSelectedAttr = JSON.parse(JSON.stringify(this.wheelnav.titleSelectedAttr)));
    this.wheelnav.titleWidth !== null && this.titleWidth === null && (this.titleWidth = this.wheelnav.titleWidth);
    this.wheelnav.titleHeight !== null && this.titleHeight === null && (this.titleHeight = this.wheelnav.titleHeight);
    this.titleWidth !== null && this.titleHeight === null && (this.titleHeight = this.titleWidth);
    this.titleWidth === null && this.titleHeight !== null && (this.titleWidth = this.titleHeight);
    wheelnavTitle().isImageTitle(this.title) && (this.titleWidth === null && (this.titleWidth = 92), this.titleHeight === null && (this.titleHeight = 117));
    this.wheelnav.titleHoverWidth !== null && this.titleHoverWidth === null && (this.titleHoverWidth = this.wheelnav.titleHoverWidth);
    this.wheelnav.titleHoverHeight !== null && this.titleHoverHeight === null && (this.titleHoverHeight = this.wheelnav.titleHoverHeight);
    this.titleHoverWidth !== null && this.titleHoverHeight === null && (this.titleHoverHeight = this.titleHoverWidth);
    this.titleHoverWidth === null && this.titleHoverHeight !== null && (this.titleHoverWidth = this.titleHoverHeight);
    this.wheelnav.titleSelectedWidth !== null && this.titleSelectedWidth === null && (this.titleSelectedWidth = this.wheelnav.titleSelectedWidth);
    this.wheelnav.titleSelectedHeight !== null && this.titleSelectedHeight === null && (this.titleSelectedHeight = this.wheelnav.titleSelectedHeight);
    this.titleSelectedWidth !== null && this.titleSelectedHeight === null && (this.titleSelectedHeight = this.titleSelectedWidth);
    this.titleSelectedWidth === null && this.titleSelectedHeight !== null && (this.titleSelectedWidth = this.titleSelectedHeight);
    this.titleHoverHeight === null && (this.titleHoverHeight = this.titleHeight);
    this.titleHoverWidth === null && (this.titleHoverWidth = this.titleWidth);
    this.titleSelectedHeight === null && (this.titleSelectedHeight = this.titleHeight);
    this.titleSelectedWidth === null && (this.titleSelectedWidth = this.titleWidth);
    this.wheelnav.linePathAttr !== null && (this.linePathAttr = JSON.parse(JSON.stringify(this.wheelnav.linePathAttr)));
    this.wheelnav.lineHoverAttr !== null && (this.lineHoverAttr = JSON.parse(JSON.stringify(this.wheelnav.lineHoverAttr)));
    this.wheelnav.lineSelectedAttr !== null && (this.lineSelectedAttr = JSON.parse(JSON.stringify(this.wheelnav.lineSelectedAttr)));
    (this.animateeffect === null || n) && (this.animateeffect = this.wheelnav.animateeffect !== null ? this.wheelnav.animateeffect : null);
    (this.animatetime === null || n) && (this.animatetime = this.wheelnav.animatetime !== null ? this.wheelnav.animatetime : 1500);
    this.title !== null ? ((this.sliceInitPathFunction === null || n) && (this.sliceInitPathFunction = this.wheelnav.sliceInitPathFunction), (this.sliceClickablePathFunction === null || n) && (this.sliceClickablePathFunction = this.wheelnav.sliceClickablePathFunction), (this.slicePathFunction === null || n) && (this.slicePathFunction = this.wheelnav.slicePathFunction), (this.sliceSelectedPathFunction === null || n) && (this.sliceSelectedPathFunction = this.wheelnav.sliceSelectedPathFunction), (this.sliceHoverPathFunction === null || n) && (this.sliceHoverPathFunction = this.wheelnav.sliceHoverPathFunction), (this.sliceTransformFunction === null || n) && (this.sliceTransformFunction = this.wheelnav.sliceTransformFunction), (this.sliceSelectedTransformFunction === null || n) && (this.sliceSelectedTransformFunction = this.wheelnav.sliceSelectedTransformFunction), (this.sliceHoverTransformFunction === null || n) && (this.sliceHoverTransformFunction = this.wheelnav.sliceHoverTransformFunction), (this.sliceInitTransformFunction === null || n) && (this.sliceInitTransformFunction = this.wheelnav.sliceInitTransformFunction)) : (this.sliceInitPathFunction = slicePath().NullInitSlice, this.sliceClickablePathFunction = slicePath().NullSlice, this.slicePathFunction = slicePath().NullSlice, this.sliceSelectedPathFunction = null, this.sliceHoverPathFunction = null, this.sliceTransformFunction = null, this.sliceSelectedTransformFunction = null, this.sliceHoverTransformFunction = null, this.sliceInitTransformFunction = null);
    (this.slicePathCustom === null || n) && (this.slicePathCustom = this.wheelnav.slicePathCustom);
    (this.sliceClickablePathCustom === null || n) && (this.sliceClickablePathCustom = this.wheelnav.sliceClickablePathCustom);
    (this.sliceSelectedPathCustom === null || n) && (this.sliceSelectedPathCustom = this.wheelnav.sliceSelectedPathCustom);
    (this.sliceHoverPathCustom === null || n) && (this.sliceHoverPathCustom = this.wheelnav.sliceHoverPathCustom);
    (this.sliceInitPathCustom === null || n) && (this.sliceInitPathCustom = this.wheelnav.sliceInitPathCustom);
    (this.sliceTransformCustom === null || n) && (this.sliceTransformCustom = this.wheelnav.sliceTransformCustom);
    (this.sliceSelectedTransformCustom === null || n) && (this.sliceSelectedTransformCustom = this.wheelnav.sliceSelectedTransformCustom);
    (this.sliceHoverTransformCustom === null || n) && (this.sliceHoverTransformCustom = this.wheelnav.sliceHoverTransformCustom);
    (this.sliceInitTransformCustom === null || n) && (this.sliceInitTransformCustom = this.wheelnav.sliceInitTransformCustom);
    (this.initPercent === null || n) && (this.initPercent = this.wheelnav.initPercent);
    (this.minPercent === null || n) && (this.minPercent = this.wheelnav.minPercent);
    (this.maxPercent === null || n) && (this.maxPercent = this.wheelnav.maxPercent);
    (this.hoverPercent === null || n) && (this.hoverPercent = this.wheelnav.hoverPercent);
    (this.selectedPercent === null || n) && (this.selectedPercent = this.wheelnav.selectedPercent);
    (this.clickablePercentMin === null || n) && (this.clickablePercentMin = this.wheelnav.clickablePercentMin);
    (this.clickablePercentMax === null || n) && (this.clickablePercentMax = this.wheelnav.clickablePercentMax);
    (this.titleSpreadScale === null || n) && (this.titleSpreadScale = this.wheelnav.titleSpreadScale !== null ? this.wheelnav.titleSpreadScale : !1);
    (this.sliceAngle === null || n) && this.wheelnav.sliceAngle !== null && (this.sliceAngle = this.wheelnav.sliceAngle)
};
wheelnavItem.prototype.initPathsAndTransforms = function() {
    this.sliceHelper = new pathHelper;
    this.sliceHelper.centerX = this.wheelnav.centerX;
    this.sliceHelper.centerY = this.wheelnav.centerY;
    this.sliceHelper.wheelRadius = this.wheelnav.wheelRadius;
    this.sliceHelper.startAngle = this.baseAngle;
    this.sliceHelper.sliceAngle = this.sliceAngle;
    this.sliceHelper.itemIndex = this.itemIndex;
    this.slicePathMin = this.slicePathFunction(this.sliceHelper, this.minPercent, this.slicePathCustom);
    this.slicePathMax = this.slicePathFunction(this.sliceHelper, this.maxPercent, this.slicePathCustom);
    this.selectedSlicePathMin = this.sliceSelectedPathFunction !== null ? this.sliceSelectedPathFunction(this.sliceHelper, this.selectedPercent * this.minPercent, this.sliceSelectedPathCustom) : this.slicePathFunction(this.sliceHelper, this.selectedPercent * this.minPercent, this.sliceSelectedPathCustom);
    this.selectedSlicePathMax = this.sliceSelectedPathFunction !== null ? this.sliceSelectedPathFunction(this.sliceHelper, this.selectedPercent * this.maxPercent, this.sliceSelectedPathCustom) : this.slicePathFunction(this.sliceHelper, this.selectedPercent * this.maxPercent, this.sliceSelectedPathCustom);
    this.hoverSlicePathMin = this.sliceHoverPathFunction !== null ? this.sliceHoverPathFunction(this.sliceHelper, this.hoverPercent * this.minPercent, this.sliceHoverPathCustom) : this.slicePathFunction(this.sliceHelper, this.hoverPercent * this.minPercent, this.sliceHoverPathCustom);
    this.hoverSlicePathMax = this.sliceHoverPathFunction !== null ? this.sliceHoverPathFunction(this.sliceHelper, this.hoverPercent * this.maxPercent, this.sliceHoverPathCustom) : this.slicePathFunction(this.sliceHelper, this.hoverPercent * this.maxPercent, this.sliceHoverPathCustom);
    this.sliceClickablePathFunction !== null && (this.clickableSlicePathMin = this.sliceClickablePathFunction(this.sliceHelper, this.clickablePercentMin, this.sliceClickablePathCustom), this.clickableSlicePathMax = this.sliceClickablePathFunction(this.sliceHelper, this.clickablePercentMax, this.sliceClickablePathCustom));
    this.sliceInitPath = this.sliceInitPathFunction !== null ? this.sliceInitPathFunction(this.sliceHelper, this.initPercent, this.sliceInitPathCustom) : this.wheelnav.currentPercent === this.wheelnav.maxPercent ? this.slicePathFunction(this.sliceHelper, this.maxPercent, this.sliceInitPathCustom) : this.slicePathFunction(this.sliceHelper, this.minPercent, this.sliceInitPathCustom);
    this.sliceTransform = this.sliceTransformFunction !== null ? this.sliceTransformFunction(this.wheelnav.centerX, this.wheelnav.centerY, this.wheelnav.wheelRadius, this.baseAngle, this.sliceAngle, this.wheelnav.titleRotateAngle, this.itemIndex, this.sliceTransformCustom) : sliceTransform().NullTransform;
    this.selectTransform = this.sliceSelectedTransformFunction !== null ? this.sliceSelectedTransformFunction(this.wheelnav.centerX, this.wheelnav.centerY, this.wheelnav.wheelRadius, this.baseAngle, this.sliceAngle, this.wheelnav.titleRotateAngle, this.itemIndex, this.sliceSelectedTransformCustom) : sliceTransform().NullTransform;
    this.hoverTransform = this.sliceHoverTransformFunction !== null ? this.sliceHoverTransformFunction(this.wheelnav.centerX, this.wheelnav.centerY, this.wheelnav.wheelRadius, this.baseAngle, this.sliceAngle, this.wheelnav.titleRotateAngle, this.itemIndex, this.sliceHoverTransformCustom) : sliceTransform().NullTransform;
    this.initTransform = this.sliceInitTransformFunction !== null ? this.sliceInitTransformFunction(this.wheelnav.centerX, this.wheelnav.centerY, this.wheelnav.wheelRadius, this.baseAngle, this.sliceAngle, this.wheelnav.titleRotateAngle, this.itemIndex, this.sliceInitTransformCustom) : sliceTransform().NullTransform;
    wheelnavTitle().isPathTitle(this.title) ? (initNavTitle = new wheelnavTitle(this.title, this.wheelnav.raphael.raphael), basicNavTitleMin = new wheelnavTitle(this.title, this.wheelnav.raphael.raphael), basicNavTitleMax = new wheelnavTitle(this.title, this.wheelnav.raphael.raphael), hoverNavTitleMin = new wheelnavTitle(this.titleHover, this.wheelnav.raphael.raphael), hoverNavTitleMax = new wheelnavTitle(this.titleHover, this.wheelnav.raphael.raphael), selectedNavTitleMin = new wheelnavTitle(this.titleSelected, this.wheelnav.raphael.raphael), selectedNavTitleMax = new wheelnavTitle(this.titleSelected, this.wheelnav.raphael.raphael), this.navTitleSizeTransform = basicNavTitleMax.getTitleSizeTransform(this.titleWidth, this.titleHeight), this.navTitleSizeHoverTransform = hoverNavTitleMax.getTitleSizeTransform(this.titleHoverWidth, this.titleHoverHeight), this.navTitleSizeSelectedTransform = selectedNavTitleMax.getTitleSizeTransform(this.titleSelectedWidth, this.titleSelectedHeight)) : (initNavTitle = new wheelnavTitle(this.title), basicNavTitleMin = new wheelnavTitle(this.title), basicNavTitleMax = new wheelnavTitle(this.title), hoverNavTitleMin = new wheelnavTitle(this.titleHover), hoverNavTitleMax = new wheelnavTitle(this.titleHover), selectedNavTitleMin = new wheelnavTitle(this.titleSelected), selectedNavTitleMax = new wheelnavTitle(this.titleSelected));
    this.initNavTitle = initNavTitle.getTitlePercentAttr(this.sliceInitPath.titlePosX, this.sliceInitPath.titlePosY, this.titleWidth, this.titleHeight);
    this.basicNavTitleMin = basicNavTitleMin.getTitlePercentAttr(this.slicePathMin.titlePosX, this.slicePathMin.titlePosY, this.titleWidth, this.titleHeight);
    this.basicNavTitleMax = basicNavTitleMax.getTitlePercentAttr(this.slicePathMax.titlePosX, this.slicePathMax.titlePosY, this.titleWidth, this.titleHeight);
    this.hoverNavTitleMin = hoverNavTitleMin.getTitlePercentAttr(this.hoverSlicePathMin.titlePosX, this.hoverSlicePathMin.titlePosY, this.titleHoverWidth, this.titleHoverHeight);
    this.hoverNavTitleMax = hoverNavTitleMax.getTitlePercentAttr(this.hoverSlicePathMax.titlePosX, this.hoverSlicePathMax.titlePosY, this.titleHoverWidth, this.titleHoverHeight);
    this.selectedNavTitleMin = selectedNavTitleMin.getTitlePercentAttr(this.selectedSlicePathMin.titlePosX, this.selectedSlicePathMin.titlePosY, this.titleSelectedWidth, this.titleSelectedHeight);
    this.selectedNavTitleMax = selectedNavTitleMax.getTitlePercentAttr(this.selectedSlicePathMax.titlePosX, this.selectedSlicePathMax.titlePosY, this.titleSelectedWidth, this.titleSelectedHeight)
};
wheelnavItem.prototype.getCurrentPath = function() {
    return this.wheelnav.currentPercent === this.wheelnav.maxPercent ? this.selected ? this.selectedSlicePathMax : this.hovered ? this.hoverSlicePathMax : this.slicePathMax : this.selected ? this.selectedSlicePathMin : this.hovered ? this.hoverSlicePathMin : this.slicePathMin
};
wheelnavItem.prototype.getCurrentClickablePath = function() {
    return this.wheelnav.currentPercent === this.wheelnav.maxPercent ? this.clickableSlicePathMax : this.clickableSlicePathMin
};
wheelnavItem.prototype.getCurrentTitle = function() {
    return this.wheelnav.currentPercent === this.wheelnav.maxPercent ? this.selected ? this.selectedNavTitleMax : this.hovered ? this.hoverNavTitleMax : this.basicNavTitleMax : this.selected ? this.selectedNavTitleMin : this.hovered ? this.hoverNavTitleMin : this.basicNavTitleMin
};
wheelnavItem.prototype.getItemRotateString = function() {
    return "r," + this.currentRotateAngle.toString() + "," + this.wheelnav.centerX + "," + this.wheelnav.centerY
};
wheelnavItem.prototype.getTitleRotateString = function(n) {
    var t = "";
    return t += this.getItemRotateString(), t + (this.wheelnav.titleRotateAngle !== null && n ? ",r," + (this.navAngle + this.wheelnav.titleRotateAngle).toString() : ",r," + (-this.currentRotateAngle).toString())
};
wheelnavTitle = function(n, t) {
    if (this.title = n, n !== null) {
        if (t !== undefined) {
            this.relativePath = t.pathToRelative(n);
            var i = t.pathBBox(this.relativePath);
            this.centerX = i.cx;
            this.centerY = i.cy;
            this.width = i.width;
            this.height = i.height;
            this.startX = this.relativePath[0][1];
            this.startY = this.relativePath[0][2]
        }
        this.title = n
    } else this.title = "";
    return this.isPathTitle = function(n) {
        return n !== null && (n.substr(0, 1) === "m" || n.substr(0, 1) === "M") && (n.substr(n.length - 1, 1) === "z" || n.substr(n.length - 1, 1) === "Z") && (n.indexOf(",") > -1 || n.indexOf(" ") > -1) ? !0 : !1
    }, this.isImageTitle = function(n) {
        return n === undefined && (n = this.title), n !== null && n.substr(0, 7) === "imgsrc:" ? !0 : !1
    }, this
};
wheelnavTitle.prototype.getTitlePercentAttr = function(n, t, i, r) {
    var u = {},
        f, e;
    return this.relativePath !== undefined ? (f = n + (this.startX - this.centerX), e = t + (this.startY - this.centerY), this.relativePath[0][1] = f, this.relativePath[0][2] = e, u = {
        path: this.relativePath,
        title: this.title
    }) : u = this.isImageTitle() ? {
        x: n - i / 2,
        y: t - r / 2,
        width: i,
        height: r,
        title: this.title,
        src: this.title.substr(7, this.title.length)
    } : {
        x: n,
        y: t,
        title: this.title
    }, u
};
wheelnavTitle.prototype.getTitleSizeTransform = function(n, t) {
    var i = "";
    return n !== null && t !== null && (i = "s", this.height > this.width ? (i += (n / this.height).toString() + ",", i += (t / this.height).toString()) : (i += (n / this.width).toString() + ",", i += (t / this.width).toString())), i
};
wheelnav.prototype.styleWheel = function() {
    this.cssMode ? (this.spreaderPathInAttr = {
        "class": this.getSpreaderCssClass("in")
    }, this.spreaderPathOutAttr = {
        "class": this.getSpreaderCssClass("out")
    }, this.spreaderTitleInAttr = {
        "class": this.getSpreaderTitleCssClass("in")
    }, this.spreaderTitleOutAttr = {
        "class": this.getSpreaderTitleCssClass("out")
    }, this.markerAttr = {
        "class": this.getMarkerCssClass()
    }) : ((this.spreaderPathInAttr === undefined || this.spreaderPathInAttr === null) && (this.spreaderPathInAttr = {
        fill: "#444",
        stroke: "#444",
        "stroke-width": 2,
        cursor: "pointer"
    }), (this.spreaderPathOutAttr === undefined || this.spreaderPathOutAttr === null) && (this.spreaderPathOutAttr = {
        fill: "#444",
        stroke: "#444",
        "stroke-width": 2,
        cursor: "pointer"
    }), (this.spreaderTitleInAttr === undefined || this.spreaderTitleInAttr === null) && (this.spreaderTitleInAttr = {
        fill: "#eee",
        stroke: "#444",
        cursor: "pointer"
    }), (this.spreaderTitleOutAttr === undefined || this.spreaderTitleOutAttr === null) && (this.spreaderTitleOutAttr = {
        fill: "#eee",
        stroke: "#444",
        cursor: "pointer"
    }), (this.markerAttr === undefined || this.markerAttr === null) && (this.markerAttr = {
        stroke: "#444",
        "stroke-width": 2
    }))
};
wheelnavItem.prototype.styleNavItem = function() {
    this.wheelnav.cssMode ? (this.slicePathAttr = {
        "class": this.wheelnav.getSliceCssClass(this.wheelItemIndex, "basic")
    }, this.sliceHoverAttr = {
        "class": this.wheelnav.getSliceCssClass(this.wheelItemIndex, "hover")
    }, this.sliceSelectedAttr = {
        "class": this.wheelnav.getSliceCssClass(this.wheelItemIndex, "selected")
    }, this.titleAttr = {
        "class": this.wheelnav.getTitleCssClass(this.wheelItemIndex, "basic")
    }, this.titleHoverAttr = {
        "class": this.wheelnav.getTitleCssClass(this.wheelItemIndex, "hover")
    }, this.titleSelectedAttr = {
        "class": this.wheelnav.getTitleCssClass(this.wheelItemIndex, "selected")
    }, this.linePathAttr = {
        "class": this.wheelnav.getLineCssClass(this.wheelItemIndex, "basic")
    }, this.lineHoverAttr = {
        "class": this.wheelnav.getLineCssClass(this.wheelItemIndex, "hover")
    }, this.lineSelectedAttr = {
        "class": this.wheelnav.getLineCssClass(this.wheelItemIndex, "selected")
    }) : (this.slicePathAttr = {
        stroke: "#333",
        "stroke-width": 0,
        cursor: "pointer",
        "fill-opacity": 1
    }, this.sliceHoverAttr = {
        stroke: "#222",
        "stroke-width": 0,
        cursor: "pointer",
        "fill-opacity": .77
    }, this.sliceSelectedAttr = {
        stroke: "#111",
        "stroke-width": 0,
        cursor: "default",
        "fill-opacity": 1
    }, this.titleAttr = {
        font: this.titleFont,
        fill: "#333",
        stroke: "none",
        cursor: "pointer"
    }, this.titleHoverAttr = {
        font: this.titleFont,
        fill: "#222",
        cursor: "pointer",
        stroke: "none"
    }, this.titleSelectedAttr = {
        font: this.titleFont,
        fill: "#fff",
        cursor: "default"
    }, this.linePathAttr = {
        stroke: "#444",
        "stroke-width": 1,
        cursor: "pointer"
    }, this.lineHoverAttr = {
        stroke: "#222",
        "stroke-width": 2,
        cursor: "pointer"
    }, this.lineSelectedAttr = {
        stroke: "#444",
        "stroke-width": 1,
        cursor: "default"
    });
    this.sliceClickablePathAttr = {
        fill: "#FFF",
        stroke: "#FFF",
        "stroke-width": 0,
        cursor: "pointer",
        "fill-opacity": .01
    };
    this.sliceClickableHoverAttr = {
        stroke: "#FFF",
        "stroke-width": 0,
        cursor: "pointer"
    };
    this.sliceClickableSelectedAttr = {
        stroke: "#FFF",
        "stroke-width": 0,
        cursor: "default"
    }
};
wheelnav.prototype.getSliceCssClass = function(n, t) {
    return "wheelnav-" + this.holderId + "-slice-" + t + "-" + n
};
wheelnav.prototype.getTitleCssClass = function(n, t) {
    return "wheelnav-" + this.holderId + "-title-" + t + "-" + n
};
wheelnav.prototype.getLineCssClass = function(n, t) {
    return "wheelnav-" + this.holderId + "-line-" + t + "-" + n
};
wheelnav.prototype.getSpreaderCssClass = function(n) {
    return "wheelnav-" + this.holderId + "-spreader-" + n
};
wheelnav.prototype.getSpreaderTitleCssClass = function(n) {
    return "wheelnav-" + this.holderId + "-spreadertitle-" + n
};
wheelnav.prototype.getMarkerCssClass = function() {
    return "wheelnav-" + this.holderId + "-marker"
};
var pathHelper = function() {
        return this.sliceRadius = 0, this.startAngle = 0, this.middleAngle = 0, this.endAngle = 0, this.sliceAngle = 0, this.startTheta = 0, this.middleTheta = 0, this.endTheta = 0, this.titlePosX = 0, this.titlePosY = 0, this.titleRadius = 0, this.titleTheta = 0, this.custom = null, this.centerX = 0, this.centerY = 0, this.wheelRadius = 0, this.itemIndex = 0, this.navItemCount = 0, this.navAngle = 0, this.setBaseValue = function(n, t) {
            t === null ? t = new slicePathCustomization : this.custom = t;
            this.sliceRadius = this.wheelRadius * n * .9;
            this.middleAngle = this.startAngle + this.sliceAngle / 2;
            this.endAngle = this.startAngle + this.sliceAngle;
            this.startTheta = this.getTheta(this.startAngle);
            this.middleTheta = this.getTheta(this.middleAngle);
            this.endTheta = this.getTheta(this.endAngle);
            t !== null ? (t.titleRadiusPercent !== null && (this.titleRadius = this.sliceRadius * t.titleRadiusPercent), t.titleSliceAnglePercent !== null && (this.titleTheta = this.getTheta(this.startAngle + this.sliceAngle * t.titleSliceAnglePercent))) : (this.titleRadius = this.sliceRadius * .5, this.titleTheta = this.middleTheta);
            this.setTitlePos()
        }, this.setTitlePos = function() {
            this.titlePosX = this.titleRadius * Math.cos(this.titleTheta) + this.centerX;
            this.titlePosY = this.titleRadius * Math.sin(this.titleTheta) + this.centerY
        }, this.getX = function(n, t) {
            return t * Math.cos(this.getTheta(n)) + this.centerX
        }, this.getY = function(n, t) {
            return t * Math.sin(this.getTheta(n)) + this.centerY
        }, this.MoveTo = function(n, t) {
            return ["M", this.getX(n, t), this.getY(n, t)]
        }, this.MoveToCenter = function() {
            return ["M", this.centerX, this.centerY]
        }, this.LineTo = function(n, t, i, r) {
            return i === undefined && (i = n), r === undefined && (r = t), ["L", this.getX(n, t), this.getY(i, r)]
        }, this.ArcTo = function(n, t, i) {
            return ["A", n, n, 0, 0, 1, this.getX(t, i), this.getY(t, i)]
        }, this.ArcBackTo = function(n, t, i) {
            return ["A", n, n, 0, 0, 0, this.getX(t, i), this.getY(t, i)]
        }, this.StartSpreader = function(n, t, i) {
            this.endAngle - this.startAngle == 360 ? n.push(this.MoveTo(t, i)) : (n.push(this.MoveToCenter()), n.push(this.LineTo(t, i)))
        }, this.Close = function() {
            return ["z"]
        }, this.getTheta = function(n) {
            return n % 360 * Math.PI / 180
        }, this
    },
    slicePathCustomization = function() {
        return this.titleRadiusPercent = .5, this.titleSliceAnglePercent = .5, this
    },
    spreaderPathCustomization = function() {
        return this.titleRadiusPercent = 0, this.titleSliceAnglePercent = .5, this.spreaderPercent = 1, this
    },
    markerPathCustomization = function() {
        return this.titleRadiusPercent = 1, this.titleSliceAnglePercent = .5, this.markerPercent = 1.05, this
    };
slicePath = function() {
    return this.NullSlice = function(n, t, i) {
        return n.setBaseValue(t, i), {
            slicePathString: "",
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.NullInitSlice = function(n, t, i) {
        return n.setBaseValue(t, i), slicePathString = [n.MoveToCenter(), n.Close()], {
            slicePathString: slicePathString,
            linePathString: slicePathString,
            titlePosX: n.centerX,
            titlePosY: n.centerY
        }
    }, this.PieSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .6, n.arcBaseRadiusPercent = 1, n.arcRadiusPercent = 1, n.startRadiusPercent = 0, n
    }, this.PieSlice = function(n, t, i) {
        i === null && (i = PieSliceCustomization());
        n.setBaseValue(t, i);
        var r = n.sliceRadius * i.arcBaseRadiusPercent,
            u = n.sliceRadius * i.arcRadiusPercent;
        return slicePathString = [n.MoveTo(n.middleAngle, i.startRadiusPercent * n.sliceRadius), n.LineTo(n.startAngle, r), n.ArcTo(u, n.endAngle, r), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.FlowerSlice = function(n, t, i) {
        i === null && (i = PieSliceCustomization(), i.titleRadiusPercent = .5, i.arcBaseRadiusPercent = .65, i.arcRadiusPercent = .14);
        var r = PieSlice(n, t, i);
        return {
            slicePathString: r.slicePathString,
            linePathString: "",
            titlePosX: r.titlePosX,
            titlePosY: r.titlePosY
        }
    }, this.PieArrowSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .6, n.arrowRadiusPercent = 1.1, n
    }, this.PieArrowSlice = function(n, t, i) {
        i === null && (i = PieArrowSliceCustomization());
        n.setBaseValue(t, i);
        r = n.sliceRadius;
        arrowAngleStart = n.startAngle + n.sliceAngle * .45;
        arrowAngleEnd = n.startAngle + n.sliceAngle * .55;
        var u = r * i.arrowRadiusPercent;
        return slicePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.ArcTo(r, arrowAngleStart, r), n.LineTo(n.middleAngle, u), n.LineTo(arrowAngleEnd, r), n.ArcTo(r, n.endAngle, r), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.PieArrowBasePieSlice = function(n, t, i) {
        i === null && (i = PieArrowSliceCustomization());
        i.arrowRadiusPercent = 1;
        var r = PieArrowSlice(n, t, i);
        return {
            slicePathString: r.slicePathString,
            linePathString: "",
            titlePosX: r.titlePosX,
            titlePosY: r.titlePosY
        }
    }, this.DonutSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.minRadiusPercent = .7, n.maxRadiusPercent = 1.2, n
    }, this.DonutSlice = function(n, t, i) {
        return i === null && (i = DonutSliceCustomization()), maxRadius = n.wheelRadius * t * i.maxRadiusPercent, minRadius = n.wheelRadius * t * i.minRadiusPercent, n.setBaseValue(t, i), n.titleRadius = (maxRadius + minRadius) / 2, n.setTitlePos(), slicePathString = [n.MoveTo(n.startAngle, minRadius), n.LineTo(n.startAngle, maxRadius), n.ArcTo(maxRadius, n.endAngle, maxRadius), n.LineTo(n.endAngle, minRadius), n.ArcBackTo(minRadius, n.startAngle, minRadius), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.CogSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .55, n.isBasePieSlice = !1, n
    }, this.CogSlice = function(n, t, i) {
        return i === null && (i = CogSliceCustomization()), n.setBaseValue(t, i), r = n.sliceRadius, rbase = n.wheelRadius * t * .83, percentAngle0625 = n.startAngle + n.sliceAngle * .0625, percentAngle1250 = n.startAngle + n.sliceAngle * .125, percentAngle1875 = n.startAngle + n.sliceAngle * .1875, percentAngle2500 = n.startAngle + n.sliceAngle * .25, percentAngle3125 = n.startAngle + n.sliceAngle * .3125, percentAngle3750 = n.startAngle + n.sliceAngle * .375, percentAngle4375 = n.startAngle + n.sliceAngle * .4375, percentAngle5000 = n.startAngle + n.sliceAngle * .5, percentAngle5625 = n.startAngle + n.sliceAngle * .5625, percentAngle6250 = n.startAngle + n.sliceAngle * .625, percentAngle6875 = n.startAngle + n.sliceAngle * .6875, percentAngle7500 = n.startAngle + n.sliceAngle * .75, percentAngle8125 = n.startAngle + n.sliceAngle * .8125, percentAngle8750 = n.startAngle + n.sliceAngle * .875, percentAngle9375 = n.startAngle + n.sliceAngle * .9375, percentAngle9687 = n.startAngle + n.sliceAngle * .96875, i.isBasePieSlice ? (r = rbase, slicePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.ArcTo(r, percentAngle0625, r), n.ArcTo(r, percentAngle1250, r), n.ArcTo(r, percentAngle1875, r), n.ArcTo(r, percentAngle2500, r), n.ArcTo(r, percentAngle3125, r), n.ArcTo(r, percentAngle3750, r), n.ArcTo(r, percentAngle4375, r), n.ArcTo(r, percentAngle5000, r), n.ArcTo(r, percentAngle5625, r), n.ArcTo(r, percentAngle6250, r), n.ArcTo(r, percentAngle6875, r), n.ArcTo(r, percentAngle7500, r), n.ArcTo(r, percentAngle8125, r), n.ArcTo(r, percentAngle8750, r), n.ArcTo(r, percentAngle9375, r), n.ArcTo(r, percentAngle9687, r), n.ArcTo(r, n.endAngle, r), n.Close()]) : slicePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.ArcTo(r, percentAngle0625, r), n.LineTo(percentAngle0625, rbase), n.ArcTo(rbase, percentAngle1875, rbase), n.LineTo(percentAngle1875, r), n.ArcTo(r, percentAngle3125, r), n.LineTo(percentAngle3125, rbase), n.ArcTo(rbase, percentAngle4375, rbase), n.LineTo(percentAngle4375, r), n.ArcTo(r, percentAngle5625, r), n.LineTo(percentAngle5625, rbase), n.ArcTo(rbase, percentAngle6875, rbase), n.LineTo(percentAngle6875, r), n.ArcTo(r, percentAngle8125, r), n.LineTo(percentAngle8125, rbase), n.ArcTo(rbase, percentAngle9375, rbase), n.LineTo(percentAngle9375, r), n.ArcTo(r, n.endAngle, r), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.CogBasePieSlice = function(n, t, i) {
        i === null && (i = CogSliceCustomization());
        i.isBasePieSlice = !0;
        var r = CogSlice(n, t, i);
        return {
            slicePathString: r.slicePathString,
            linePathString: "",
            titlePosX: r.titlePosX,
            titlePosY: r.titlePosY
        }
    }, this.StarSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .44, n.minRadiusPercent = .5, n.isBasePieSlice = !1, n
    }, this.StarSlice = function(n, t, i) {
        return i === null && (i = StarSliceCustomization()), n.setBaseValue(t, i), r = n.wheelRadius * t, rbase = r * i.minRadiusPercent, i.isBasePieSlice ? (r = n.sliceRadius, slicePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.ArcTo(r, n.middleAngle, r), n.ArcTo(r, n.endAngle, r), n.Close()]) : slicePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, rbase), n.LineTo(n.middleAngle, r), n.LineTo(n.endAngle, rbase), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.StarBasePieSlice = function(n, t, i) {
        i === null && (i = StarSliceCustomization());
        i.titleRadiusPercent = .6;
        i.isBasePieSlice = !0;
        var r = StarSlice(n, t, i);
        return {
            slicePathString: r.slicePathString,
            linePathString: "",
            titlePosX: r.titlePosX,
            titlePosY: r.titlePosY
        }
    }, this.MenuSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.menuRadius = 35, n.titleRadiusPercent = .63, n.isSelectedLine = !1, n.lineBaseRadiusPercent = 0, n
    }, this.MenuSlice = function(n, t, i) {
        var u, r;
        return i === null && (i = MenuSliceCustomization()), n.setBaseValue(t, i), x = n.centerX, y = n.centerY, u = n.wheelRadius * t, n.titleRadius = u * i.titleRadiusPercent, n.setTitlePos(), r = t * i.menuRadius, t <= .05 && (r = 10), middleTheta = n.middleTheta, slicePathString = [
            ["M", n.titlePosX - r * Math.cos(middleTheta), n.titlePosY - r * Math.sin(middleTheta)],
            ["A", r, r, 0, 0, 1, n.titlePosX + r * Math.cos(middleTheta), n.titlePosY + r * Math.sin(middleTheta)],
            ["A", r, r, 0, 0, 1, n.titlePosX - r * Math.cos(middleTheta), n.titlePosY - r * Math.sin(middleTheta)],
            ["z"]
        ], linePathString = t <= .05 ? [
            ["M", x, y],
            ["A", 1, 1, 0, 0, 1, x + 1, y + 1]
        ] : i.isSelectedLine ? [n.MoveTo(n.middleAngle, i.lineBaseRadiusPercent * u), n.ArcTo(u / 3, n.middleAngle, n.titleRadius - r)] : [n.MoveTo(n.middleAngle, i.lineBaseRadiusPercent * u), n.ArcTo(u / 2, n.middleAngle, n.titleRadius - r)], {
            slicePathString: slicePathString,
            linePathString: linePathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.MenuSliceSelectedLine = function(n, t, i) {
        i === null && (i = MenuSliceCustomization());
        i.isSelectedLine = !0;
        var r = MenuSlice(n, t, i);
        return {
            slicePathString: r.slicePathString,
            linePathString: r.linePathString,
            titlePosX: r.titlePosX,
            titlePosY: r.titlePosY
        }
    }, this.MenuSliceWithoutLine = function(n, t, i) {
        var r = MenuSlice(n, t, i);
        return {
            slicePathString: r.slicePathString,
            linePathString: "",
            titlePosX: r.titlePosX,
            titlePosY: r.titlePosY
        }
    }, this.LineSlice = function(n, t, i) {
        return n.setBaseValue(t, i), r = n.sliceRadius, n.sliceAngle > 60 && n.sliceAngle < 180 ? (n.titleRadius = r * (36 / n.sliceAngle), n.setTitlePos()) : (n.titleRadius = r * .55, n.setTitlePos()), slicePathString = n.sliceAngle < 180 ? [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.LineTo(n.endAngle, r), n.Close()] : n.startAngle === 180 || n.startAngle === 0 || n.startAngle === -180 || n.startAngle === 360 ? [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.LineTo(n.startAngle, r, n.middleAngle, r), n.LineTo(n.endAngle, r, n.middleAngle, r), n.LineTo(n.endAngle, r), n.Close()] : [n.MoveToCenter(), n.LineTo(n.startAngle, r), n.LineTo(n.middleAngle, r, n.startAngle, r), n.LineTo(n.middleAngle, r, n.endAngle, r), n.LineTo(n.endAngle, r), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.EyeSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .68, n
    }, this.EyeSlice = function(n, t, i) {
        return i === null && (i = EyeSliceCustomization()), n.setBaseValue(t, i), r = n.wheelRadius * t * .7, t === 0 && (r = .01), startAngle = n.startAngle, endAngle = n.endAngle, n.sliceAngle === 180 && (startAngle = n.startAngle + n.sliceAngle / 4, endAngle = n.startAngle + n.sliceAngle - n.sliceAngle / 4), slicePathString = [n.MoveTo(endAngle, r), n.ArcTo(r, startAngle, r), n.ArcTo(r, endAngle, r), n.Close()], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.WheelSlice = function(n, t, i) {
        n.setBaseValue(t, i);
        x = n.centerX;
        y = n.centerY;
        r = n.sliceRadius;
        startTheta = n.startTheta;
        middleTheta = n.middleTheta;
        endTheta = n.endTheta;
        var u;
        return n.sliceAngle < 120 ? (n.titleRadius = r * .57, u = .9) : n.sliceAngle < 180 ? (n.titleRadius = r * .52, u = .91) : (n.titleRadius = r * .45, u = .873), slicePathString = [n.MoveTo(n.middleAngle, r * .07), ["L", r * .07 * Math.cos(middleTheta) + r * .87 * Math.cos(startTheta) + x, r * .07 * Math.sin(middleTheta) + r * .87 * Math.sin(startTheta) + y],
            ["A", r * u, r * u, 0, 0, 1, r * .07 * Math.cos(middleTheta) + r * .87 * Math.cos(endTheta) + x, r * .07 * Math.sin(middleTheta) + r * .87 * Math.sin(endTheta) + y], n.Close()
        ], linePathString = [n.MoveTo(n.startAngle, r), n.ArcTo(r, n.endAngle, r), n.ArcBackTo(r, n.startAngle, r)], n.setTitlePos(), {
            slicePathString: slicePathString,
            linePathString: linePathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.TabSlice = function(n) {
        var i = n.wheelRadius * .9,
            r = 360 / n.sliceAngle,
            t = 2 * i / r;
        return x = n.centerX, y = n.centerY, itemIndex = n.itemIndex, titlePosX = x, titlePosY = itemIndex * t + y + t / 2 - i, slicePathString = [
            ["M", x - t / 2, itemIndex * t + y - i],
            ["L", t / 2 + x, itemIndex * t + y - i],
            ["L", t / 2 + x, (itemIndex + 1) * t + y - i],
            ["L", x - t / 2, (itemIndex + 1) * t + y - i],
            ["z"]
        ], {
            slicePathString: slicePathString,
            linePathString: "",
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }, this.YinYangSlice = function(n, t, i) {
        return n.setBaseValue(t, i), r = n.sliceRadius, slicePathString = [n.MoveToCenter(), n.ArcTo(r / 2, n.startAngle, r), n.ArcTo(r, n.endAngle, r), n.ArcBackTo(r / 2, 0, 0), n.Close()], titlePosX = n.getX(n.startAngle, r / 2), titlePosY = n.getY(n.startAngle, r / 2), {
            slicePathString: slicePathString,
            linePathString: slicePathString,
            titlePosX: titlePosX,
            titlePosY: titlePosY
        }
    }, this.WebSlice = function(n, t, i) {
        return n.setBaseValue(t, i), r = n.sliceRadius, n.titleRadius = r * .55, n.setTitlePos(), linePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, r * 1.1), n.MoveToCenter(), n.LineTo(n.endAngle, r * 1.1), n.MoveTo(n.startAngle, r * .15), n.LineTo(n.endAngle, r * .15), n.MoveTo(n.startAngle, r * .35), n.LineTo(n.endAngle, r * .35), n.MoveTo(n.startAngle, r * .55), n.LineTo(n.endAngle, r * .55), n.MoveTo(n.startAngle, r * .75), n.LineTo(n.endAngle, r * .75), n.MoveTo(n.startAngle, r * .95), n.LineTo(n.endAngle, r * .95), n.Close()], {
            slicePathString: "",
            linePathString: linePathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.WinterSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .85, n.arcRadiusPercent = 1, n
    }, this.WinterSlice = function(n, t, i) {
        i === null && (i = WinterSliceCustomization());
        n.setBaseValue(t, i);
        sliceAngle = n.sliceAngle;
        parallelAngle = n.startAngle + sliceAngle / 4;
        parallelAngle2 = n.startAngle + sliceAngle / 4 * 3;
        borderAngle1 = n.startAngle + sliceAngle / 200;
        borderAngle2 = n.startAngle + sliceAngle / 2 - sliceAngle / 200;
        borderAngle3 = n.startAngle + sliceAngle / 2 + sliceAngle / 200;
        borderAngle4 = n.startAngle + sliceAngle - sliceAngle / 200;
        var r = n.sliceRadius * i.arcRadiusPercent;
        return slicePathString = [n.MoveToCenter(), n.MoveTo(parallelAngle, r / 100), n.LineTo(borderAngle1, r / 2), n.LineTo(parallelAngle, r - r / 100), n.LineTo(borderAngle2, r / 2), n.LineTo(parallelAngle, r / 100), n.MoveTo(parallelAngle2, r / 100), n.LineTo(borderAngle4, r / 2), n.LineTo(parallelAngle2, r - r / 100), n.LineTo(borderAngle3, r / 2), n.LineTo(parallelAngle2, r / 100), n.Close()], linePathString = [n.MoveTo(parallelAngle, r), n.LineTo(borderAngle2, r / 2), n.MoveTo(borderAngle3, r / 2), n.LineTo(parallelAngle2, r)], {
            slicePathString: slicePathString,
            linePathString: linePathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.TutorialSliceCustomization = function() {
        var n = new slicePathCustomization;
        return n.titleRadiusPercent = .6, n.isMoveTo = !1, n.isLineTo = !1, n.isArcTo = !1, n.isArcBackTo = !1, n
    }, this.TutorialSlice = function(n, t, i) {
        return i === null && (i = TutorialSliceCustomization()), n.setBaseValue(t, i), slicePathString = [], slicePathString.push(n.MoveToCenter()), i.isMoveTo === !0 && slicePathString.push(n.MoveTo(n.middleAngle, n.sliceRadius / 4)), i.isLineTo && slicePathString.push(n.LineTo(n.startAngle, n.sliceRadius)), i.isArcTo && slicePathString.push(n.ArcTo(n.sliceRadius, n.middleAngle, n.sliceRadius)), i.isArcBackTo && slicePathString.push(n.ArcBackTo(n.sliceRadius, n.endAngle, n.sliceRadius)), slicePathString.push(n.Close()), linePathString = [n.MoveToCenter(), n.LineTo(n.startAngle, n.sliceRadius), n.ArcTo(n.sliceRadius, n.endAngle, n.sliceRadius), n.Close()], {
            slicePathString: slicePathString,
            linePathString: linePathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this
};
sliceTransform = function() {
    this.startAngle = 0;
    this.startTheta = 0;
    this.middleTheta = 0;
    this.endTheta = 0;
    var t = function(t, i, r, u, f) {
            this.startAngle = u;
            this.startTheta = n(startAngle);
            this.middleTheta = n(startAngle + f / 2);
            this.endTheta = n(startAngle + f)
        },
        n = function(n) {
            return n % 360 * Math.PI / 180
        };
    return this.NullTransform = function() {
        return {
            sliceTransformString: "",
            lineTransformString: "",
            titleTransformString: ""
        }
    }, this.MoveMiddleTransform = function(i, r, u, f, e, o, s) {
        var c, h, l, a;
        return t(i, r, u, f, e, o, s), c = "t" + (u / 10 * Math.cos(middleTheta)).toString() + "," + (u / 10 * Math.sin(middleTheta)).toString(), o !== null ? h = n(-o) : (l = f - s * e, h = n(l + e / 2)), a = "s1,r0,t" + (u / 10 * Math.cos(h)).toString() + "," + (u / 10 * Math.sin(h)).toString(), {
            sliceTransformString: c,
            lineTransformString: c,
            titleTransformString: a
        }
    }, this.RotateTransform = function() {
        var n = "s1,r360";
        return {
            sliceTransformString: n,
            lineTransformString: n,
            titleTransformString: n
        }
    }, this.RotateHalfTransform = function() {
        var n = "s1,r90";
        return {
            sliceTransformString: n,
            lineTransformString: n,
            titleTransformString: n
        }
    }, this.RotateTitleTransform = function() {
        return {
            sliceTransformString: "",
            lineTransformString: "",
            titleTransformString: "s1,r360"
        }
    }, this.ScaleTransform = function() {
        var n = "s1.2";
        return {
            sliceTransformString: n,
            lineTransformString: "",
            titleTransformString: n
        }
    }, this.ScaleTitleTransform = function() {
        return {
            sliceTransformString: "",
            lineTransformString: "",
            titleTransformString: "s1.3"
        }
    }, this.RotateScaleTransform = function() {
        var n = "r360,s1.3";
        return {
            sliceTransformString: n,
            lineTransformString: "",
            titleTransformString: n
        }
    }, this.CustomTransform = function(n, t, i, r, u, f, e, o) {
        var s = o.scaleString + "," + o.rotateString;
        return {
            sliceTransformString: s,
            lineTransformString: s,
            titleTransformString: s
        }
    }, this.CustomTitleTransform = function(n, t, i, r, u, f, e, o) {
        var s = o.scaleString + "," + o.rotateString;
        return {
            sliceTransformString: "",
            lineTransformString: "",
            titleTransformString: s
        }
    }, this
};
sliceTransformCustomization = function() {
    return this.scaleString = "s1", this.rotateString = "r0", this
};
spreader = function(n) {
    var t, i;
    if (this.wheelnav = n, this.wheelnav.spreaderEnable) {
        this.spreaderHelper = new pathHelper;
        this.spreaderHelper.centerX = this.wheelnav.centerX;
        this.spreaderHelper.centerY = this.wheelnav.centerY;
        this.spreaderHelper.navItemCount = this.wheelnav.navItemCount;
        this.spreaderHelper.navAngle = this.wheelnav.navAngle;
        this.spreaderHelper.wheelRadius = this.wheelnav.spreaderRadius;
        this.spreaderHelper.startAngle = this.wheelnav.spreaderStartAngle;
        this.spreaderHelper.sliceAngle = this.wheelnav.spreaderSliceAngle;
        t = this.wheelnav;
        this.animateeffect = null;
        this.animatetime = 1500;
        this.wheelnav.animateeffect !== null && (this.animateeffect = this.wheelnav.animateeffect);
        this.wheelnav.animatetime !== null && (this.animatetime = this.wheelnav.animatetime);
        this.fontAttr = this.wheelnav.spreaderTitleFont !== null ? {
            font: this.wheelnav.spreaderTitleFont
        } : {
            font: "100 32px Impact, Charcoal, sans-serif"
        };
        this.spreaderPathIn = this.wheelnav.spreaderPathFunction(this.spreaderHelper, this.wheelnav.spreaderInPercent, this.wheelnav.spreaderPathCustom);
        this.spreaderPathOut = this.wheelnav.spreaderPathFunction(this.spreaderHelper, this.wheelnav.spreaderOutPercent, this.wheelnav.spreaderPathCustom);
        i = this.spreaderPathOut;
        t.initPercent < t.maxPercent && (i = this.spreaderPathIn);
        this.spreaderPath = this.wheelnav.raphael.path(i.spreaderPathString);
        this.spreaderPath.attr(t.spreaderPathAttr);
        this.spreaderPath.id = t.getSpreaderId();
        this.spreaderPath.node.id = this.spreaderPath.id;
        this.spreaderPath.click(function() {
            t.spreadWheel()
        });
        this.inTitleWidth = this.wheelnav.spreaderInTitleWidth;
        this.inTitleHeight = this.wheelnav.spreaderInTitleHeight;
        this.outTitleWidth = this.wheelnav.spreaderOutTitleWidth;
        this.outTitleHeight = this.wheelnav.spreaderOutTitleHeight;
        this.inTitleWidth !== null && this.inTitleHeight === null && (this.inTitleHeight = this.inTitleWidth);
        this.inTitleWidth === null && this.inTitleHeight !== null && (this.inTitleWidth = this.inTitleHeight);
        this.outTitleWidth !== null && this.outTitleHeight === null && (this.outTitleHeight = this.outTitleWidth);
        this.outTitleWidth === null && this.outTitleHeight !== null && (this.outTitleWidth = this.outTitleHeight);
        wheelnavTitle().isImageTitle(this.wheelnav.spreaderOutTitle) && (this.inTitleWidth === null && (this.inTitleWidth = 32), this.inTitleHeight === null && (this.inTitleHeight = 32), this.outTitleWidth === null && (this.outTitleWidth = 32), this.outTitleHeight === null && (this.outTitleHeight = 32));
        inTitle = wheelnavTitle().isPathTitle(this.wheelnav.spreaderInTitle) ? new wheelnavTitle(this.wheelnav.spreaderInTitle, this.wheelnav.raphael.raphael) : new wheelnavTitle(this.wheelnav.spreaderInTitle);
        this.inTitleSizeTransform = inTitle.getTitleSizeTransform(this.inTitleWidth, this.inTitleHeight);
        this.inTitle = inTitle.getTitlePercentAttr(this.spreaderPathIn.titlePosX, this.spreaderPathIn.titlePosY, this.inTitleWidth, this.inTitleHeight);
        outTitle = wheelnavTitle().isPathTitle(this.wheelnav.spreaderOutTitle) ? new wheelnavTitle(this.wheelnav.spreaderOutTitle, this.wheelnav.raphael.raphael) : new wheelnavTitle(this.wheelnav.spreaderOutTitle);
        this.outTitleSizeTransform = outTitle.getTitleSizeTransform(this.outTitleWidth, this.outTitleHeight);
        this.outTitle = outTitle.getTitlePercentAttr(this.spreaderPathOut.titlePosX, this.spreaderPathOut.titlePosY, this.outTitleWidth, this.outTitleHeight);
        var r = this.outTitle,
            e = this.wheelnav.spreaderTitleOutAttr,
            u = this.outTitleWidth,
            f = this.outTitleHeight,
            o = this.outTitleSizeTransform;
        t.initPercent < t.maxPercent && (r = this.inTitle, e = this.wheelnav.spreaderTitleInAttr, u = this.inTitleWidth, f = this.inTitleHeight, o = this.inTitleSizeTransform);
        this.spreaderTitle = wheelnavTitle().isPathTitle(this.wheelnav.spreaderOutTitle) ? t.raphael.path(r.path) : wheelnavTitle().isImageTitle(this.wheelnav.spreaderOutTitle) ? this.wheelnav.raphael.image(r.src, i.titlePosX - u / 2, i.titlePosY - f / 2, u, f) : t.raphael.text(i.titlePosX, i.titlePosY, r.title);
        this.spreaderTitle.attr(this.fontAttr);
        this.spreaderTitle.attr(e);
        this.spreaderTitle.attr({
            transform: o
        });
        this.spreaderTitle.id = t.getSpreaderTitleId();
        this.spreaderTitle.node.id = this.spreaderTitle.id;
        this.spreaderTitle.click(function() {
            t.spreadWheel()
        });
        this.setCurrentTransform()
    }
    return this
};
spreader.prototype.setCurrentTransform = function(n) {
    if (this.wheelnav.spreaderEnable) {
        if (n === undefined || n === !1) {
            currentPath = this.wheelnav.currentPercent > this.wheelnav.minPercent ? this.spreaderPathOut.spreaderPathString : this.spreaderPathIn.spreaderPathString;
            spreaderTransformAttr = {
                path: currentPath
            };
            this.spreaderPath.animate(spreaderTransformAttr, this.animatetime, this.animateeffect);
            var t, i, r;
            this.wheelnav.currentPercent === this.wheelnav.maxPercent ? (t = this.outTitle, i = this.wheelnav.spreaderTitleOutAttr, this.spreaderPath.attr(this.wheelnav.spreaderPathOutAttr), r = this.outTitleSizeTransform) : (t = this.inTitle, i = this.wheelnav.spreaderTitleInAttr, this.spreaderPath.attr(this.wheelnav.spreaderPathInAttr), r = this.inTitleSizeTransform);
            wheelnavTitle().isPathTitle(t.title) ? (i.path = t.path, i.transform = r) : wheelnavTitle().isImageTitle(t.title) ? (i.x = t.x, i.y = t.y, i.width = t.width, i.height = t.height, this.spreaderTitle.attr({
                src: t.src
            })) : (offYOffset = 0, t.title === "-" && (offYOffset = 3), i.x = t.x, i.y = t.y - offYOffset, t.title !== null && this.spreaderTitle.attr({
                text: t.title
            }));
            this.spreaderTitle.animate(i, this.animatetime, this.animateeffect)
        }
        this.spreaderPath.toFront();
        this.spreaderTitle.toFront()
    }
};
spreaderPath = function() {
    return this.NullSpreader = function(n, t) {
        return t === null && (t = new spreaderPathCustomization), n.setBaseValue(t.spreaderPercent, t), {
            spreaderPathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.PieSpreaderCustomization = function() {
        var n = new spreaderPathCustomization;
        return n.spreaderRadius = 25, n.arcBaseRadiusPercent = 1, n.arcRadiusPercent = 1, n.startRadiusPercent = 0, n
    }, this.PieSpreader = function(n, t, i) {
        i === null && (i = PieSpreaderCustomization());
        n.setBaseValue(i.spreaderPercent * t, i);
        var r = n.sliceRadius * i.arcBaseRadiusPercent,
            u = n.sliceRadius * i.arcRadiusPercent;
        return spreaderPathString = [], n.StartSpreader(spreaderPathString, n.startAngle, r), spreaderPathString.push(n.ArcTo(u, n.middleAngle, r)), spreaderPathString.push(n.ArcTo(u, n.endAngle, r)), spreaderPathString.push(n.Close()), {
            spreaderPathString: spreaderPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.StarSpreaderCustomization = function() {
        var n = new spreaderPathCustomization;
        return n.minRadiusPercent = .5, n
    }, this.StarSpreader = function(n, t, i) {
        i === null && (i = StarSpreaderCustomization());
        n.setBaseValue(i.spreaderPercent * t, i);
        rbase = n.wheelRadius * i.spreaderPercent * i.minRadiusPercent * t;
        r = n.sliceRadius;
        spreaderPathString = [];
        sliceAngle = n.sliceAngle / n.navItemCount;
        baseAngle = n.navAngle;
        n.endAngle - n.startAngle < 360 && (baseAngle = n.startAngle);
        n.StartSpreader(spreaderPathString, baseAngle, r);
        for (var u = 0; u < n.navItemCount; u++) startAngle = u * sliceAngle + (baseAngle + sliceAngle / 2), middleAngle = startAngle + sliceAngle / 2, endAngle = startAngle + sliceAngle, n.endAngle - n.startAngle < 360 && u === n.navItemCount - 1 && (endAngle = middleAngle), spreaderPathString.push(n.LineTo(startAngle, rbase)), spreaderPathString.push(n.LineTo(middleAngle, r)), spreaderPathString.push(n.LineTo(endAngle, rbase));
        return spreaderPathString.push(n.Close()), {
            spreaderPathString: spreaderPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.AntiStarSpreaderCustomization = function() {
        var n = new spreaderPathCustomization;
        return n.minRadiusPercent = .21, n
    }, this.AntiStarSpreader = function(n, t, i) {
        i === null && (i = AntiStarSpreaderCustomization());
        n.setBaseValue(i.spreaderPercent * t, i);
        rbase = n.wheelRadius * i.spreaderPercent * i.minRadiusPercent * t;
        r = n.sliceRadius;
        spreaderPathString = [];
        sliceAngle = n.sliceAngle / n.navItemCount;
        baseAngle = n.navAngle;
        n.endAngle - n.startAngle < 360 ? (baseAngle = n.startAngle, n.StartSpreader(spreaderPathString, baseAngle, rbase)) : spreaderPathString.push(n.MoveTo(n.startAngle + (n.navAngle + sliceAngle / 2), rbase));
        for (var u = 0; u < n.navItemCount; u++) startAngle = u * sliceAngle + (baseAngle + sliceAngle / 2), middleAngle = startAngle + sliceAngle / 2, endAngle = startAngle + sliceAngle, n.endAngle - n.startAngle < 360 && u === n.navItemCount - 1 && (endAngle = middleAngle), spreaderPathString.push(n.LineTo(startAngle, r)), spreaderPathString.push(n.LineTo(middleAngle, rbase)), spreaderPathString.push(n.LineTo(endAngle, r));
        return spreaderPathString.push(n.Close()), {
            spreaderPathString: spreaderPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.FlowerSpreaderCustomization = function() {
        var n = new spreaderPathCustomization;
        return n.minRadiusPercent = .63, n.menuRadius = 7, n
    }, this.FlowerSpreader = function(n, t, i) {
        i === null && (i = FlowerSpreaderCustomization());
        n.setBaseValue(i.spreaderPercent * t, i);
        rbase = n.wheelRadius * i.spreaderPercent * i.minRadiusPercent * t;
        r = n.sliceRadius;
        spreaderPathString = [];
        sliceAngle = n.sliceAngle / n.navItemCount;
        baseAngle = n.navAngle;
        n.endAngle - n.startAngle < 360 ? (baseAngle = n.startAngle, n.StartSpreader(spreaderPathString, baseAngle, rbase)) : spreaderPathString.push(n.MoveTo(n.startAngle + (n.navAngle + sliceAngle / 2), rbase));
        for (var u = 0; u < n.navItemCount; u++) startAngle = u * sliceAngle + (baseAngle + sliceAngle / 2), middleAngle = startAngle + sliceAngle / 2, endAngle = startAngle + sliceAngle, n.endAngle - n.startAngle < 360 ? (u === 0 && spreaderPathString.push(n.ArcTo(i.menuRadius, startAngle, rbase)), u === n.navItemCount - 1 && (endAngle = middleAngle)) : spreaderPathString.push(n.LineTo(startAngle, rbase)), spreaderPathString.push(n.ArcTo(i.menuRadius, endAngle, rbase));
        return spreaderPathString.push(n.Close()), {
            spreaderPathString: spreaderPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.HolderSpreaderCustomization = function() {
        var n = new spreaderPathCustomization;
        return n.minRadiusPercent = .5, n.menuRadius = 37, n
    }, this.HolderSpreader = function(n, t, i) {
        i === null && (i = HolderSpreaderCustomization());
        n.setBaseValue(i.spreaderPercent * t, i);
        rbase = n.wheelRadius * i.spreaderPercent * i.minRadiusPercent * t;
        r = n.sliceRadius;
        spreaderPathString = [];
        sliceAngle = n.sliceAngle / n.navItemCount;
        baseAngle = n.navAngle;
        n.endAngle - n.startAngle < 360 ? (baseAngle = n.startAngle, n.StartSpreader(spreaderPathString, baseAngle, rbase)) : spreaderPathString.push(n.MoveTo(n.startAngle + (n.navAngle + sliceAngle / 2), rbase));
        for (var u = 0; u < n.navItemCount; u++) startAngle = u * sliceAngle + (baseAngle + sliceAngle / 2), middleAngle = startAngle + sliceAngle / 4, endAngle = startAngle + sliceAngle, n.endAngle - n.startAngle < 360 ? u === n.navItemCount - 1 && (endAngle = middleAngle) : spreaderPathString.push(n.LineTo(startAngle, rbase)), spreaderPathString.push(n.LineTo(startAngle, r)), spreaderPathString.push(n.ArcBackTo(i.menuRadius, middleAngle, rbase)), spreaderPathString.push(n.ArcTo(i.menuRadius, endAngle, r));
        return spreaderPathString.push(n.Close()), {
            spreaderPathString: spreaderPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.LineSpreaderCustomization = function() {
        var n = new spreaderPathCustomization;
        return n.minRadiusPercent = .5, n
    }, this.LineSpreader = function(n, t, i) {
        i === null && (i = LineSpreaderCustomization());
        n.setBaseValue(i.spreaderPercent * t, i);
        rbase = n.wheelRadius * i.spreaderPercent * i.minRadiusPercent * t;
        r = n.sliceRadius;
        spreaderPathString = [];
        sliceAngle = n.sliceAngle / n.navItemCount;
        baseAngle = n.navAngle;
        n.endAngle - n.startAngle < 360 && (baseAngle = n.startAngle);
        spreaderPathString.push(n.MoveTo(baseAngle + sliceAngle / 2, r));
        for (var u = 0; u < n.navItemCount; u++) startAngle = u * sliceAngle + (baseAngle + sliceAngle / 2), endAngle = startAngle + sliceAngle, n.navItemCount === 2 && (endAngle -= 90), spreaderPathString.push(n.LineTo(startAngle, r)), spreaderPathString.push(n.LineTo(endAngle, r));
        return spreaderPathString.push(n.Close()), {
            spreaderPathString: spreaderPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this
};
marker = function(n) {
    return this.wheelnav = n, this.wheelnav.markerEnable && (this.markerHelper = new pathHelper, this.markerHelper.centerX = this.wheelnav.centerX, this.markerHelper.centerY = this.wheelnav.centerY, this.markerHelper.navItemCount = this.wheelnav.navItemCount, this.markerHelper.navAngle = this.wheelnav.navAngle, this.markerHelper.wheelRadius = this.wheelnav.wheelRadius * this.wheelnav.maxPercent, this.markerHelper.sliceAngle = this.wheelnav.navItems[0].sliceAngle, this.markerHelper.startAngle = this.markerHelper.navAngle - this.markerHelper.sliceAngle / 2, this.animateeffect = "bounce", this.animatetime = 1500, this.wheelnav.animateeffect !== null && (this.animateeffect = this.wheelnav.animateeffect), this.wheelnav.animatetime !== null && (this.animatetime = this.wheelnav.animatetime), this.markerPathMin = this.wheelnav.markerPathFunction(this.markerHelper, this.wheelnav.minPercent, this.wheelnav.markerPathCustom), this.markerPathMax = this.wheelnav.markerPathFunction(this.markerHelper, this.wheelnav.maxPercent, this.wheelnav.markerPathCustom), this.marker = this.wheelnav.raphael.path(this.markerPathMax.markerPathString), this.marker.attr(this.wheelnav.markerAttr), this.marker.id = this.wheelnav.getMarkerId(), this.marker.node.id = this.marker.id), this
};
marker.prototype.setCurrentTransform = function(n) {
    var t, i;
    this.wheelnav.markerEnable && (t = "", t = this.wheelnav.currentPercent === this.wheelnav.maxPercent ? this.markerPathMax.markerPathString : this.markerPathMin.markerPathString, n !== undefined ? (i = n - this.markerHelper.navAngle, markerTransformAttr = {
        transform: "r," + i.toString() + "," + this.wheelnav.centerX + "," + this.wheelnav.centerY,
        path: t
    }) : markerTransformAttr = {
        path: t
    }, this.marker.animate(markerTransformAttr, this.animatetime, this.animateeffect), this.marker.toFront())
};
markerPath = function() {
    return this.NullMarker = function(n, t) {
        return t === null && (t = new markerPathCustomization), n.setBaseValue(t), {
            markerPathString: "",
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.TriangleMarkerCustomization = function() {
        var n = new markerPathCustomization;
        return n.arcBaseRadiusPercent = .80, n.arcRadiusPercent = .70, n.startRadiusPercent = 1.8, n
    }, this.TriangleMarker = function(n, t, i) {
        i === null && (i = TriangleMarkerCustomization());
        n.setBaseValue(i.markerPercent * t, i);
        var u = n.sliceRadius * i.arcBaseRadiusPercent,
            r = n.sliceRadius * i.arcRadiusPercent,
            f = n.startAngle + n.sliceAngle * .40,
            e = n.startAngle + n.sliceAngle * .60;
        return markerPathString = [n.MoveTo(n.navAngle, u), n.LineTo(f, r), n.LineTo(e, r), n.Close()], {
            markerPathString: markerPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.PieLineMarkerCustomization = function() {
        var n = new markerPathCustomization;
        return n.arcBaseRadiusPercent = 1, n.arcRadiusPercent = 1, n.startRadiusPercent = 0, n.sliceAngle = null, n
    }, this.PieLineMarker = function(n, t, i) {
        i === null && (i = PieLineMarkerCustomization());
        n.setBaseValue(i.markerPercent * t, i);
        var r = n.sliceRadius * i.arcBaseRadiusPercent,
            u = n.sliceRadius * i.arcRadiusPercent;
        return i.sliceAngle !== null && (n.startAngle = n.navAngle - i.sliceAngle / 2, n.endAngle = n.navAngle + i.sliceAngle / 2), markerPathString = [n.MoveTo(n.startAngle, r), n.ArcTo(u, n.endAngle, r), n.ArcBackTo(u, n.startAngle, r), n.Close()], {
            markerPathString: markerPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.MenuMarkerCustomization = function() {
        var n = new markerPathCustomization;
        return n.menuRadius = 40, n.titleRadiusPercent = .63, n.lineBaseRadiusPercent = 0, n
    }, this.MenuMarker = function(n, t, i) {
        i === null && (i = MenuMarkerCustomization());
        n.setBaseValue(i.markerPercent * t, i);
        x = n.centerX;
        y = n.centerY;
        n.titleRadius = n.wheelRadius * i.titleRadiusPercent * t;
        n.setTitlePos();
        var r = i.menuRadius * t;
        return t <= .05 && (r = 11), middleTheta = n.middleTheta, markerPathString = [
            ["M", n.titlePosX - r * Math.cos(middleTheta), n.titlePosY - r * Math.sin(middleTheta)],
            ["A", r, r, 0, 0, 1, n.titlePosX + r * Math.cos(middleTheta), n.titlePosY + r * Math.sin(middleTheta)],
            ["A", r, r, 0, 0, 1, n.titlePosX - r * Math.cos(middleTheta), n.titlePosY - r * Math.sin(middleTheta)],
            ["z"]
        ], {
            markerPathString: markerPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.LineMarkerCustomization = function() {
        var n = new markerPathCustomization;
        return n.arcBaseRadiusPercent = 1.05, n.arcRadiusPercent = 1.2, n.startRadiusPercent = 0, n
    }, this.LineMarker = function(n, t, i) {
        i === null && (i = LineMarkerCustomization());
        n.setBaseValue(i.markerPercent * t, i);
        var r = n.sliceRadius * i.arcBaseRadiusPercent,
            u = n.sliceRadius * i.arcRadiusPercent;
        return markerPathString = [n.MoveTo(n.navAngle, r), n.LineTo(n.navAngle, u), n.Close()], {
            markerPathString: markerPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this.DropMarkerCustomization = function() {
        var n = new markerPathCustomization;
        return n.dropBaseRadiusPercent = 0, n.dropRadiusPercent = .15, n
    }, this.DropMarker = function(n, t, i) {
        i === null && (i = DropMarkerCustomization());
        n.setBaseValue(i.markerPercent * t, i);
        var u = n.sliceRadius * i.dropBaseRadiusPercent,
            f = n.startAngle + n.sliceAngle * .2,
            e = n.startAngle,
            o = n.startAngle + n.sliceAngle * .8,
            s = n.startAngle + n.sliceAngle,
            r = n.sliceRadius * i.dropRadiusPercent;
        return markerPathString = [n.MoveTo(0, r), n.ArcTo(r, 180, r), n.ArcTo(r, 360, r), n.MoveTo(n.navAngle, u), n.LineTo(f, r), n.LineTo(e, r), n.LineTo(n.navAngle, r * 1.6), n.LineTo(s, r), n.LineTo(o, r), n.Close()], {
            markerPathString: markerPathString,
            titlePosX: n.titlePosX,
            titlePosY: n.titlePosY
        }
    }, this
};
colorpalette = {
    defaultpalette: ["#2D9E46", "#F5BE41", "#F77604", "#D63C22", "#006BA6", "#92ADAF"],
    purple: ["#4F346B", "#623491", "#9657D6", "#AD74E7", "#CBA3F3"],
    greenred: ["#17B92A", "#FF3D00", "#17B92A", "#FF3D00"],
    greensilver: ["#1F700A", "#79CC3C", "#D4E178", "#E6D5C3", "#AC875D"],
    oceanfive: ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951"],
    garden: ["#648A4F", "#2B2B29", "#DF6126", "#FFA337", "#F57C85"],
    gamebookers: ["#FF9900", "#DCDCDC", "#BCBCBC", "#3299BB", "#727272"],
    parrot: ["#D80351", "#F5D908", "#00A3EE", "#929292", "#3F3F3F"],
    pisycholand: ["#FF1919", "#FF5E19", "#FF9F19", "#E4FF19", "#29FF19"],
    makeLOVEnotWAR: ["#2C0EF0", "#B300FF", "#6751F0", "#FF006F", "#8119FF"],
    theworldismine: ["#F21D1D", "#FF2167", "#B521FF", "#7E2AA8", "#000000"],
    fractalloveone: ["#002EFF", "#00FFF7", "#00FF62", "#FFAA00", "#FFF700"],
    fractallovetwo: ["#FF9500", "#FF0000", "#FF00F3", "#AA00FF", "#002EFF"],
    fractallove: ["#002EFF", "#00FFF7", "#00FF62", "#FFAA00", "#F5D908", "#FF0000", "#FF00F3", "#AA00FF"],
    sprinkles: ["#272523", "#FFACAC", "#FFD700", "#00590C", "#08006D"],
    goldenyellow: ["#D8B597", "#8C4006", "#B6690F", "#E3C57F", "#FFEDBE"],
    hotaru: ["#364C4A", "#497C7F", "#92C5C0", "#858168", "#CCBCA5"]
};
//# sourceMappingURL=wheelnav.min.js.map
