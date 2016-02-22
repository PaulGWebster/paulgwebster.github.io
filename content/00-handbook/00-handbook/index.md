{
	"category": "handbook",
	"chapter": "intro",
	"title": "The FreeBSD Documentation Project",
	"last-edit": "22-02-2016-14-52-33"
}
---##---
<style>
li {
	font-size: .8125rem;
	line-height: 1.5;
}
</style>
# The FreeBSD Documentation Project

<div class="intro" markdown="1">
Revision [48108](https://svnweb.freebsd.org/changeset/doc/48108)
Copyright © 1995-2016 The FreeBSD Project

Welcome to FreeBSD! This handbook covers the installation and day to day use of *FreeBSD 9.3-RELEASE* and *FreeBSD 10.2-RELEASE*. This book is the result of ongoing work by many individuals. Some sections might be outdated. Those interested in helping to update and expand this document should send email to the [FreeBSD documentation project mailing list](http://lists.freebsd.org/mailman/listinfo/freebsd-doc).

The latest version of this book is available from the [FreeBSD web site](http://www.freebsd.org/). Previous versions can be obtained from [http://docs.freebsd.org/doc/](http://docs.freebsd.org/doc/). The book can be downloaded in a variety of formats and compression options from the [FreeBSD FTP server](ftp://ftp.freebsd.org/pub/FreeBSD/doc/) or one of the numerous [mirror sites](https://www.freebsd.org/doc/handbook/book.html#mirrors-ftp). Printed copies can be purchased at the [FreeBSD Mall](http://www.freebsdmall.com/). Searches can be performed on the handbook and other documents on the [search page](https://www.freebsd.org/search/index.html).
</div>

## Copyright
Redistribution and use in source (XML DocBook) and 'compiled' forms (XML, HTML, PDF, PostScript, RTF and so forth) with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code (XML DocBook) must retain the above copyright notice, this list of conditions and the following disclaimer as the first lines of this file unmodified.
2. Redistributions in compiled form (transformed to other DTDs, converted to PDF, PostScript, RTF and other formats) must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

> ### Important
> THIS DOCUMENTATION IS PROVIDED BY THE FREEBSD DOCUMENTATION PROJECT "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE FREEBSD DOCUMENTATION PROJECT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS DOCUMENTATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

* FreeBSD is a registered trademark of the FreeBSD Foundation.
* 3Com and HomeConnect are registered trademarks of 3Com Corporation.
* 3ware is a registered trademark of 3ware Inc.
* ARM is a registered trademark of ARM Limited.
* Adaptec is a registered trademark of Adaptec, Inc.
* Adobe, Acrobat, Acrobat Reader, Flash and PostScript are either registered trademarks or trademarks of Adobe Systems Incorporated in the United States and/or other countries.
* Apple, AirPort, FireWire, iMac, iPhone, iPad, Mac, Macintosh, Mac OS, Quicktime, and TrueType are trademarks of Apple Inc., registered in the U.S. and other countries.
* Android is a trademark of Google Inc.
* Heidelberg, Helvetica, Palatino, and Times Roman are either registered trademarks or trademarks of Heidelberger Druckmaschinen AG in the U.S. and other countries.
* IBM, AIX, OS/2, PowerPC, PS/2, S/390, and ThinkPad are trademarks of International Business Machines Corporation in the United States, other countries, or both.
* IEEE, POSIX, and 802 are registered trademarks of Institute of Electrical and Electronics Engineers, Inc. in the United States.
* Intel, Celeron, Centrino, Core, EtherExpress, i386, i486, Itanium, Pentium, and Xeon are trademarks or registered trademarks of Intel Corporation or its subsidiaries in the United States and other countries.
* Intuit and Quicken are registered trademarks and/or registered service marks of Intuit Inc., or one of its subsidiaries, in the United States and other countries.
* Linux is a registered trademark of Linus Torvalds.
* LSI Logic, AcceleRAID, eXtremeRAID, MegaRAID and Mylex are trademarks or registered trademarks of LSI Logic Corp.
* Microsoft, IntelliMouse, MS-DOS, Outlook, Windows, Windows Media and Windows NT are either registered trademarks or trademarks of Microsoft Corporation in the United States and/or other countries.
* Motif, OSF/1, and UNIX are registered trademarks and IT DialTone and The Open Group are trademarks of The Open Group in the United States and other countries.
* Oracle is a registered trademark of Oracle Corporation.
* RealNetworks, RealPlayer, and RealAudio are the registered trademarks of RealNetworks, Inc.
* Red Hat, RPM, are trademarks or registered trademarks of Red Hat, Inc. in the United States and other countries.
* Sun, Sun Microsystems, Java, Java Virtual Machine, JDK, JRE, JSP, JVM, Netra, OpenJDK, Solaris, StarOffice, SunOS and VirtualBox are trademarks or registered trademarks of Sun Microsystems, Inc. in the United States and other countries.
* MATLAB is a registered trademark of The MathWorks, Inc.
* SpeedTouch is a trademark of Thomson.
* VMware is a trademark of VMware, Inc.
* Mathematica is a registered trademark of Wolfram Research, Inc.
* XFree86 is a trademark of The XFree86 Project, Inc.
* Ogg Vorbis and Xiph.Org are trademarks of Xiph.Org.
* Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this document, and the FreeBSD Project was aware of the trademark claim, the designations have been followed by the “™” or the “®” symbol.

<div style="position: relative;top: -16px;font-size: .8125rem;">
Last modified on 2016-01-28 by wblock.
</div>