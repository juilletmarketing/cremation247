# zoho form
This is the zoho form for people to contact us.

## Code

```
<iframe id="ziframe_981074" aria-label="Formulaire de contact" frameborder="0"     style="height:500px;width:99%;border:none;" src='https://forms.zohopublic.com/foretdelasecondevie/form/ContactSiteweb/formperma/hLCg1PJKMJrqHwl7fF6wgxHFqsNuAlpoui_ayU_GnNE'>    
</iframe>

<script type="text/javascript">
(function() {
  try {
    var zf_frame = document.getElementById("ziframe_981074");
    var ifrmSrc = zf_frame.src;
        
        if (!((new RegExp("[?&]referrername=")).test(ifrmSrc))) {
            var rfr = window.location.href;
            
            try { 
                rfr = window.self !== window.top ? 
                    window.top.location.href : 
                    (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : "");
            } catch (e) {}
            
            if (rfr && rfr !== "") {
                if (rfr.length > 1800) {
                    var queryIndex = rfr.indexOf('?');
                    if (queryIndex > -1) {
                        rfr = rfr.substring(0, queryIndex);
                    }
                    if (rfr.length > 1800) {
                        rfr = rfr.substring(0, 1800);
                    }
                }
                ifrmSrc += ((ifrmSrc.indexOf('?') > 0) ? '&' : '?') + 'referrername=' + encodeURIComponent(rfr);
            }
        }
        if (zf_frame.src !== ifrmSrc) {
            zf_frame.src = ifrmSrc;
        }
  } catch (e) {}
})();
</script>
```
## Notes from Zoho
**Selected embeded form** : Advanced iframe with Referrer Tracking. Use this code to capture the full source URL of the embedded website in all browsers.

## Instructions

- Make it pop as a pop-up when people click "Planifier une crémation".
- Frame the pop-up to look nice, not fully covering the screen when popping.
- Its size should be adapted according to size screen for accessibility.
- It should make the background (what's not the form) blurry to put focus on filling the form when it pops up.