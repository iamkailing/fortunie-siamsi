// Fortunie Siamsi — "game" edge function (generated; edit sources in ftn/)
import { createClient } from "npm:@supabase/supabase-js@2.45.4";
const F=[
["ดีมาก","ฟ้าเปิด ทางโล่ง","ช่วงนี้ทำอะไรมีคนช่วยหนุน เรื่องที่รอมานานเริ่มขยับ","คนโสดมีโอกาสเจอคนคุยถูกใจจากวงเพื่อน คนมีคู่ได้คุยเรื่องอนาคตกัน","งานที่ตั้งใจทำมีคนเห็น เหมาะกับการเสนอไอเดียใหม่","มีรายรับเข้ามาเป็นระยะ เก็บส่วนหนึ่งไว้ก่อนใช้","กล้าพูดสิ่งที่อยากได้ออกไปตรง ๆ"],
["ดี","ลมพัดเบา เรือค่อยแล่น","ไม่หวือหวาแต่มั่นคง ทำต่อเนื่องแล้วจะเห็นผล","ความสัมพันธ์อบอุ่นขึ้นจากเรื่องเล็ก ๆ ที่ใส่ใจกัน","งานเดินตามแผน อย่าเพิ่งเปลี่ยนกลางทาง","ใช้จ่ายตามแผนได้ดี ยังไม่ใช่ช่วงลงทุนก้อนใหญ่","ทำทีละอย่างให้จบก่อนเริ่มเรื่องใหม่"],
["ค่อยเป็นค่อยไป","ฝนตกก่อนฟ้าใส","มีเรื่องให้คิดเยอะ เป็นช่วงจัดระเบียบก่อนเรื่องดีจะตามมา","ถ้ามีเรื่องค้างใจ ช่วงนี้เหมาะกับการคุยกันดี ๆ","งานอาจช้ากว่าที่หวัง เผื่อเวลาไว้อีกหน่อย","ชะลอการซื้อของชิ้นใหญ่ไว้ก่อน","พักให้พอ แล้วค่อยตัดสินใจ"],
["ดีมาก","ดอกบัวพ้นน้ำ","สิ่งที่อดทนมาเริ่มออกดอกออกผล","มีคนเห็นความตั้งใจของคุณ ความรักค่อย ๆ ชัดขึ้น","เหมาะกับการเรียนรู้หรือเริ่มฝึกทักษะใหม่","มีโอกาสได้ผลตอบแทนจากสิ่งที่ทำไว้ก่อนหน้า","ขอบคุณตัวเองที่ไม่ยอมแพ้"],
["ดี","บ้านมีแสงไฟ","คนใกล้ตัวคือกำลังใจสำคัญของช่วงนี้","คนใกล้ตัวอาจเป็นคนที่ใช่มากกว่าที่คิด","ทำงานเป็นทีมได้ผลดีกว่าทำคนเดียว","เหมาะกับการวางแผนเงินร่วมกับครอบครัว","โทรหาคนที่คิดถึงสักคน"],
["ค่อยเป็นค่อยไป","ทางคดเคี้ยว ค่อยไปก็ถึง","มีทางอ้อมบ้าง แต่ทุกก้าวพาเข้าใกล้เป้าหมาย","อย่าเร่งคำตอบจากใคร ให้เวลาความรู้สึกได้ชัดเอง","รายละเอียดเล็ก ๆ สำคัญ ตรวจงานซ้ำอีกรอบ","จดรายจ่ายสักสัปดาห์ จะเห็นรูรั่วชัดขึ้น","ใจเย็นกับตัวเองให้มากขึ้น"],
["ดีมาก","ดาวนำทาง","ช่วงนี้ความรู้สึกข้างในชัด ลองฟังเสียงในใจ","มีจังหวะดีให้เปิดใจหรือบอกความรู้สึก","มีโอกาสใหม่เข้ามา ลองพิจารณาก่อนปฏิเสธ","มีช่องทางรายได้เสริมให้ลองศึกษา","จดไอเดียที่แวบเข้ามาไว้ทันที"],
["ดี","ต้นไม้ผลิใบ","เป็นช่วงเริ่มต้นที่ดีของหลายเรื่อง","คนโสดลองเปิดรับคนใหม่ คนมีคู่ลองทำกิจกรรมใหม่ด้วยกัน","เหมาะกับการเริ่มโปรเจกต์เล็ก ๆ","ออมทีละน้อย ดีกว่ารอเก็บก้อนใหญ่","เริ่มจากก้าวที่เล็กที่สุดวันนี้"],
["ค่อยเป็นค่อยไป","หมอกยามเช้า","บางเรื่องยังไม่ชัด อย่าเพิ่งรีบสรุป","ถ้าสงสัยอะไร ถามตรง ๆ ดีกว่าเดาเอง","รอข้อมูลให้ครบก่อนตัดสินใจเรื่องสำคัญ","อ่านเงื่อนไขให้ละเอียดก่อนเซ็นหรือโอน","ให้เวลาสักพัก แล้วภาพจะชัดขึ้นเอง"],
["ดีมาก","ทองต้องแสง","เสน่ห์และความสามารถของคุณเด่นชัด","มีคนแอบชื่นชมอยู่ ลองสังเกตคนรอบตัว","ผลงานได้รับคำชม เหมาะกับการขอสิ่งที่สมควรได้","รายได้จากงานที่ทำมีแนวโน้มดีขึ้น","แต่งตัวให้รู้สึกดีกับตัวเอง"],
["ดี","สายน้ำไหลเย็น","อารมณ์นิ่งขึ้น ตัดสินใจได้ดี","คุยกันด้วยความใจเย็น ความเข้าใจจะตามมา","งานที่ต้องใช้สมาธิทำได้ดีเป็นพิเศษ","รายรับรายจ่ายสมดุล","หาเวลาเงียบ ๆ ให้ตัวเองวันละนิด"],
["ค่อยเป็นค่อยไป","เมฆบังจันทร์","ถ้ารู้สึกเหนื่อย เป็นสัญญาณให้พัก ไม่ใช่ให้หยุด","ความรักต้องการความอดทนอีกนิด อย่าตัดสินจากวันที่เหนื่อย","แบ่งงานใหญ่เป็นชิ้นเล็ก จะเบาขึ้นมาก","งดใช้เงินเพื่อคลายเครียดชั่วคราว","นอนให้พอก่อนเรื่องอื่น"],
["ดีมาก","มังกรเหินฟ้า","พลังสูง ทำอะไรมีแรงผลักดัน","ความมั่นใจทำให้คุณน่าดึงดูด","เหมาะกับการรับผิดชอบงานที่ใหญ่ขึ้น","มีโอกาสทางการเงินจากความกล้าตัดสินใจ แต่คิดให้รอบก่อน","ตั้งเป้าให้ชัด แล้วลงมือ"],
["ดี","เพื่อนแท้ข้างกาย","มีคนพร้อมช่วยเหลือ อย่าเกรงใจที่จะขอ","ความรักที่เริ่มจากมิตรภาพมีแนวโน้มดี","คนรู้จักพาไปเจอโอกาสใหม่","ให้ยืมเงินควรมีข้อตกลงที่ชัดเจน","ขอความช่วยเหลือในเรื่องที่ติดอยู่"],
["ค่อยเป็นค่อยไป","ปลูกวันนี้ เก็บเกี่ยวพรุ่งนี้","ผลยังไม่มาทันที แต่สิ่งที่ทำอยู่มีความหมาย","สร้างความไว้ใจทีละนิด ดีกว่าเร่งความสัมพันธ์","ตั้งใจฝึกฝน ช่วงนี้คือช่วงสะสม","อดทนกับแผนออมระยะยาว","มองย้อนดูว่าคุณมาไกลแค่ไหนแล้ว"],
["ดี","ประตูบานใหม่","มีการเปลี่ยนแปลงเล็ก ๆ ที่พาไปทางที่ดีขึ้น","ถ้ากำลังมูฟออน ช่วงนี้ใจเบาลง","ลองวิธีทำงานแบบใหม่ จะง่ายกว่าเดิม","ทบทวนค่าบริการรายเดือนที่ไม่ได้ใช้","ปล่อยของเก่าที่ไม่ใช้แล้ว เปิดที่ให้ของใหม่"],
["ดีมาก","ฟ้าหลังฝน","เรื่องหนักใจเริ่มคลี่คลาย รอยยิ้มกลับมา","ความเข้าใจผิดเก่า ๆ มีโอกาสได้เคลียร์","ปัญหาที่ค้างอยู่เริ่มเห็นทางออก","สภาพคล่องดีขึ้นกว่าช่วงก่อน","ให้รางวัลเล็ก ๆ กับตัวเอง"],
["ค่อยเป็นค่อยไป","ถือหางเสือให้มั่น","มีหลายทางให้เลือก ยึดสิ่งที่สำคัญที่สุดไว้","ถ้าน้อยใจ พูดออกมาอย่างนุ่มนวล ดีกว่าเก็บไว้คนเดียว","โฟกัสงานหลัก ปฏิเสธงานที่ไม่จำเป็นได้","เลี่ยงตัดสินใจเรื่องเงินตอนอารมณ์ยังไม่นิ่ง","เขียนเรื่องสำคัญ 3 อย่างของสัปดาห์นี้"],
["ดี","ระฆังดังกังวาน","คำตอบที่รออยู่มีแนวโน้มมาถึง","มีคนส่งสัญญาณมา ลองตอบกลับดู","การติดต่อประสานงานลื่นไหล","เหมาะกับการตามเงินที่ค้างอยู่","ตอบข้อความที่ค้างไว้ให้ครบ"],
["ดีมาก","ทรัพย์ไหลมา","เรื่องเงินและโอกาสช่วงนี้ค่อนข้างสดใส","ความรักเรียบง่ายแต่มั่นคง","งานที่ทำมีแนวโน้มต่อยอดเป็นรายได้","มีแนวโน้มได้รายรับเพิ่ม วางแผนใช้ให้คุ้ม","แบ่งส่วนหนึ่งทำบุญหรือแบ่งปัน"],
["ค่อยเป็นค่อยไป","เทียนกลางลม","ใจอาจหวั่นไหวง่าย ดูแลใจตัวเองก่อนใคร","รักตัวเองให้มาก ความรักที่ใช่จะเข้ามาง่ายขึ้น","ไม่ต้องเปรียบเทียบกับใคร เดินตามจังหวะตัวเอง","แยกของจำเป็นกับของอยากได้ก่อนจ่าย","อยู่กับคนที่ทำให้สบายใจ"],
["ดี","นกคืนรัง","กลับมาหาสิ่งที่ทำให้ใจสงบ","มีโอกาสได้ใช้เวลาดี ๆ กับคนที่รัก","งานที่เคยพักไว้ หยิบกลับมาทำต่อได้","ค่อย ๆ เคลียร์ภาระเก่าทีละก้อน","กลับไปทำสิ่งที่เคยชอบ"],
["ดีมาก","พระจันทร์เต็มดวง","หลายเรื่องลงตัวพอดี","ความสัมพันธ์ชัดเจนขึ้น คนโสดมีเสน่ห์เป็นพิเศษ","งานใหญ่ที่ทำมามีแนวโน้มเสร็จสวย","เหมาะกับการสรุปบัญชีและตั้งเป้าใหม่","ฉลองความสำเร็จเล็ก ๆ ที่ผ่านมา"],
["ค่อยเป็นค่อยไป","รากไม้หยั่งลึก","เน้นสร้างพื้นฐานให้แน่น มากกว่าความเร็ว","ความรักที่ค่อย ๆ โตมักอยู่ได้นาน","เรียนรู้จากคนที่มีประสบการณ์","เน้นความมั่นคงไว้ก่อน ยังไม่ใช่ช่วงเสี่ยง","ทำกิจวัตรเล็ก ๆ ให้สม่ำเสมอ"],
["ดี","ผีเสื้อแรกบิน","กล้าลองสิ่งใหม่ จะได้เจอด้านดีของตัวเอง","การเริ่มต้นใหม่ในความรักเป็นไปได้","เหมาะกับการเสนองานหรือสมัครงาน","ลองหารายได้จากสิ่งที่ถนัด","ทำสิ่งที่กลัวนิด ๆ สักหนึ่งอย่าง"],
["ดี","สะพานเชื่อมใจ","เรื่องที่ห่างเหินมีโอกาสกลับมาใกล้กัน","คนที่ห่างกันไปอาจติดต่อกลับมา คิดให้ดีก่อนตอบ","เป็นตัวกลางประสานงานได้ดี","ร่วมมือกับคนอื่นช่วยลดค่าใช้จ่ายได้","ให้อภัยตัวเองในเรื่องที่ผ่านไปแล้ว"],
["ดีมาก","ม้าวิ่งทางตรง","เป้าหมายชัด ทางข้างหน้าโล่ง","รู้ใจตัวเองชัดขึ้นว่าต้องการความรักแบบไหน","มีแนวโน้มก้าวหน้าเร็วกว่าที่คิด","เรื่องเงินที่วางแผนมาดี มีแนวโน้มออกมาดี","เดินหน้าสิ่งที่ตัดสินใจไว้แล้ว"],
["ค่อยเป็นค่อยไป","ชาร้อนในวันหนาว","อ่อนโยนกับตัวเองหน่อย สิ่งดี ๆ อยู่ใกล้กว่าที่คิด","ความห่วงใยเล็ก ๆ มีความหมายกว่าคำสัญญาใหญ่","ทำงานในจังหวะที่ไหว ไม่ต้องรีบตามใคร","ใช้เงินกับสิ่งที่ช่วยให้ใจสบายอย่างพอดี","ดื่มอะไรอุ่น ๆ แล้วหายใจลึก ๆ"],
["ดีมาก","ลมส่งว่าว","มีคนช่วยผลักให้ไปได้ไกลกว่าเดิม","ความรักได้แรงหนุนจากคนรอบตัว","มีผู้ใหญ่เห็นฝีมือ เปิดทางให้","มีรายได้จากคำแนะนำของคนรู้จัก","รับความช่วยเหลือด้วยใจเปิด"],
["ดี","ร่มใหญ่กลางแดด","มีที่พักใจให้กลับไปเสมอ","คู่รักเป็นที่พึ่งให้กันได้ดี","งานมั่นคง เหมาะกับการทำให้ดีขึ้นทีละนิด","ค่าใช้จ่ายอยู่ในการควบคุม","ขอบคุณคนที่คอยดูแลคุณ"],
["ค่อยเป็นค่อยไป","เดินช้าแต่ไม่หยุด","ความคืบหน้าเล็ก ๆ ก็นับว่าเดินหน้า","ไม่ต้องรีบหาคำตอบเรื่องหัวใจ","ทำงานตามลำดับ อย่าข้ามขั้น","ตั้งออมอัตโนมัติจะง่ายกว่า","ชื่นชมตัวเองทุกครั้งที่ทำได้"],
["ดีมาก","ดอกไม้บานรับเช้า","เป็นช่วงที่สดใส มีพลังเริ่มสิ่งใหม่","มีโอกาสได้เจอคนที่คุยแล้วสบายใจ","ไอเดียสดใหม่ได้รับการตอบรับ","มีแนวโน้มได้ของขวัญหรือโชคเล็ก ๆ","ตื่นเช้าขึ้นอีกนิดแล้วเริ่มวันใหม่"],
["ดี","นาฬิกาเดินตรง","จังหวะชีวิตลงตัวขึ้น","นัดเจอกันบ่อยขึ้นช่วยให้ใกล้กัน","งานที่มีกำหนดส่งทำได้ทันเวลา","จ่ายบิลตรงเวลา ช่วยให้ใจสบาย","จัดตารางวันให้มีช่วงพัก"],
["ค่อยเป็นค่อยไป","ทะเลก่อนน้ำขึ้น","ช่วงนี้เงียบไปบ้าง เป็นช่วงรอจังหวะ","อย่าคิดแทนอีกฝ่าย ถามให้ชัด","รอจังหวะที่เหมาะก่อนเสนองานใหญ่","เก็บสำรองไว้สำหรับเรื่องไม่คาดคิด","ใช้ช่วงเงียบนี้เติมพลังให้ตัวเอง"],
["ดีมาก","สายรุ้งพาดฟ้า","มีเรื่องน่ายินดีเข้ามาหลังรอคอย","ความรักมีสีสัน มีเรื่องให้ยิ้มบ่อย","ได้ร่วมงานกับคนเก่งที่ช่วยให้โต","มีแนวโน้มได้เงินก้อนเล็ก ๆ จากงานพิเศษ","แบ่งปันเรื่องดีให้คนที่รัก"],
["ดี","ใบไม้ร่วงเพื่อผลิใหม่","ปล่อยบางอย่างไป เพื่อรับสิ่งที่ดีกว่า","ความสัมพันธ์ที่ไม่สบายใจ ค่อย ๆ ถอยออกมาได้","ปรับบทบาทงานให้เหมาะกับตัวเองมากขึ้น","ตัดรายจ่ายที่ไม่จำเป็นแล้วจะเบาขึ้น","จัดห้องหรือโต๊ะทำงานใหม่"],
["ค่อยเป็นค่อยไป","เส้นด้ายต้องค่อยกรอ","เรื่องที่ยุ่งเหยิงต้องค่อย ๆ แก้ทีละปม","พูดคุยทีละเรื่อง จะเข้าใจกันง่ายกว่า","จัดลำดับงานก่อนลงมือ","รวมรายจ่ายย่อยให้เห็นในภาพเดียว","เขียนสิ่งที่กังวลออกมาบนกระดาษ"],
["ดี","ปลาว่ายทวนน้ำ","มีแรงสู้มากกว่าที่คิด","ความจริงใจทำให้ความรักแน่นแฟ้น","งานยากจะผ่านไปได้ด้วยความตั้งใจ","รายได้ค่อย ๆ ขยับขึ้นตามความพยายาม","เชื่อในแรงของตัวเอง"],
["ดีมาก","ไข่มุกในเปลือกหอย","สิ่งดีที่ซ่อนอยู่ในตัวคุณกำลังถูกมองเห็น","มีคนเห็นคุณค่าในแบบที่คุณเป็น","ทักษะที่สะสมไว้ได้ใช้ประโยชน์","สิ่งที่ลงแรงไว้เริ่มมีค่าขึ้น","อย่ามองข้ามความสามารถของตัวเอง"],
["ค่อยเป็นค่อยไป","ฟ้าครึ้มยามบ่าย","อารมณ์อาจขึ้นลงบ้าง เป็นเรื่องปกติ","ให้พื้นที่กันและกันบ้าง","ทำงานชิ้นที่ง่ายก่อนเพื่อสร้างแรง","เลี่ยงการช้อปตอนเหนื่อย","ออกไปเดินรับลมสักสิบนาที"],
["ดี","บันไดทีละขั้น","ค่อย ๆ ขึ้นไปทีละขั้นอย่างมั่นคง","ความรักเติบโตไปพร้อมกัน","มีโอกาสได้งานที่ท้าทายขึ้น","วางเป้าออมเป็นขั้น ๆ จะทำได้จริง","ตั้งเป้าเล็กที่ทำได้ภายในสัปดาห์นี้"],
["ดีมาก","ประทีปส่องทาง","คำตอบที่ตามหาเริ่มชัดเจน","ใจรู้แล้วว่าใครสำคัญ","มองเห็นทางไปต่อของงานชัดขึ้น","การตัดสินใจเรื่องเงินมีข้อมูลรองรับดี","เชื่อความรู้สึกแรกของตัวเอง"],
["ดี","เมล็ดพันธุ์ในมือ","คุณมีสิ่งที่ต้องการอยู่แล้ว แค่เริ่มลงมือ","ความรักเริ่มจากการกล้าทักทาย","เริ่มงานที่ผัดไว้ได้แล้ว","รายได้เสริมจากงานอดิเรกเป็นไปได้","ลงมือวันนี้ แม้แค่ห้านาที"],
["ค่อยเป็นค่อยไป","จันทร์เสี้ยวรอเต็มดวง","ยังไม่ถึงเวลาเต็มที่ แต่กำลังเดินไปถึง","ความรู้สึกต้องการเวลาเติบโต","สะสมผลงานไว้ วันหนึ่งจะมีคนเห็น","ออมสม่ำเสมอ ดีกว่าออมทีละมาก","อดทนอีกนิด แล้วชื่นชมตัวเองที่มาถึงตรงนี้"]
];
const LV={"ดีมาก":{c:"#a86fe0",bg:"#f1e7fc",glow:"#b98ae6",say:"ใบดีมาก ฟ้าเปิดทางให้แล้วค่ะ"},"ดี":{c:"#6fbf87",bg:"#e8f6ec",glow:"#6fbf87",say:"ใบดีค่ะ วันนี้ใจฟูแน่ ๆ"},"ค่อยเป็นค่อยไป":{c:"#8fa9c4",bg:"#e9f0f7",glow:"#7e9cc0",say:"ค่อย ๆ ไปนะคะ ทุกก้าวมีความหมาย"}};
const RAR=[
 {name:"ธรรมดา",share:50,c:"#8fa9c4",bg:"#e9f0f7",glow:"#9db4c8"},
 {name:"หายาก",share:28,c:"#6fbf87",bg:"#e8f6ec",glow:"#7cbf8e"},
 {name:"แรร์",share:14,c:"#a86fe0",bg:"#f1e7fc",glow:"#b98ae6"},
 {name:"เอพิก",share:6,c:"#e7799f",bg:"#fde8f0",glow:"#f4a9c4"},
 {name:"ตำนาน",share:2,c:"#d9a531",bg:"#fdf3d6",glow:"#f0d28a"}
];
const PETS=[
 {n:"หอยทากใจเย็น",dn:"ปลาคาร์ฟ",e:"🎏",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"เต่าน้อยมั่นคง",e:"🐢",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"ลูกเจี๊ยบตัวจิ๋ว",dn:"ไก่ทองนำลาภ",e:"🐓",t:0,ab:{star:1},d:"ได้ 1 แต้มบุญทุกครั้งที่เขย่า"},
 {n:"แฮมสเตอร์แก้มป่อง",dn:"คางคกสามขา",e:"🐸",t:0,ab:{star:1},d:"ได้ 1 แต้มบุญทุกครั้งที่เขย่า"},
 {n:"กบน้อยนำโชค",dn:"ปลาทองนำโชค",e:"🐠",t:0,ab:{again:.05},d:"5% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"ผึ้งขยัน",dn:"ค้างคาวนำโชค",e:"🦇",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"เต่าทองจุดดาว",dn:"นกสาลิกา",e:"🐦",t:0,ab:{drop:.25},d:"โอกาสเจอสัตว์มงคล +0.25%"},
 {n:"เม่นขนนุ่ม",dn:"หนูทองนำทรัพย์",e:"🐭",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"กระรอกเก็บโชค",dn:"กวางนำลาภ",e:"🦌",t:0,ab:{star:1},d:"ได้ 1 แต้มบุญทุกครั้งที่เขย่า"},
 {n:"เพนกวินเดินเตาะแตะ",dn:"นกกระเรียน",e:"🕊️",t:0,ab:{again:.05},d:"5% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หนอนน้อยรอบิน",dn:"ปลาตะเพียนทอง",e:"🐟",t:0,ab:{burnLeaf:3},d:"เผาใบแล้วได้แต้มบุญ +3"},
 {n:"กระต่ายจันทร์",e:"🐰",t:1,ab:{cdr:.10},d:"เวลารอเขย่าฟรีลดลง 10%"},
 {n:"แพนด้าฟูฟู",dn:"กิเลน",e:"🦄",t:1,ab:{drop:.5},d:"โอกาสเจอสัตว์มงคล +0.5%"},
 {n:"แมวนำโชค",e:"🐱",t:1,ab:{again:.10},d:"10% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หมาน้อยซื่อสัตย์",e:"🐶",t:1,ab:{cdr:.10},d:"เวลารอเขย่าฟรีลดลง 10%"},
 {n:"โคอาล่าขี้เซา",dn:"ม้าทองมงคล",e:"🐴",t:1,ab:{star:2},d:"ได้ 2 แต้มบุญทุกครั้งที่เขย่า"},
 {n:"หมูนำทรัพย์",e:"🐷",t:1,ab:{again:.10},d:"10% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หมีน้ำผึ้ง",dn:"โคทองนำลาภ",e:"🐮",t:1,ab:{drop:.5},d:"โอกาสเจอสัตว์มงคล +0.5%"},
 {n:"เป็ดน้อยลอยน้ำ",dn:"เป็ดแมนดาริน",e:"🦆",t:1,ab:{cdr:.10},d:"เวลารอเขย่าฟรีลดลง 10%"},
 {n:"แกะขนเมฆ",e:"🐑",t:1,ab:{burnLeaf:5},d:"เผาใบแล้วได้แต้มบุญ +5"},
 {n:"จิ้งจอกไพ่ทาโรต์",dn:"จิ้งจอกเก้าหาง",e:"🦊",t:2,ab:{cap:1,cdr:.10},d:"เก็บสิทธิ์ฟรีได้เพิ่ม 1 และเวลารอลดลง 10%"},
 {n:"นกฮูกดวงดาว",e:"🦉",t:2,ab:{drop:1},d:"โอกาสเจอสัตว์มงคล +1%"},
 {n:"โลมาสายรุ้ง",dn:"ปลามังกร",e:"🐡",t:2,ab:{again:.15},d:"15% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"ปลาหมึกแปดโชค",dn:"ปี่เซียะ",e:"🐲",t:2,ab:{cdr:.15},d:"เวลารอเขย่าฟรีลดลง 15%"},
 {n:"นกแก้วช่างพูด",dn:"นกการเวก",e:"🐦",t:2,ab:{drop:1},d:"โอกาสเจอสัตว์มงคล +1%"},
 {n:"หมาป่าเดือนเพ็ญ",dn:"ช้างเผือก",e:"🐘",t:2,ab:{again:.15},d:"15% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"วาฬฝันหวาน",dn:"เต่ามังกร",e:"🐢",t:2,ab:{cdr:.15},d:"เวลารอเขย่าฟรีลดลง 15%"},
 {n:"ผีเสื้อราตรี",dn:"นาคน้อย",e:"🐍",t:3,ab:{cdr:.25},d:"เวลารอเขย่าฟรีลดลง 25%"},
 {n:"ยูนิคอร์นเมฆ",dn:"นกฟีนิกซ์",e:"🐦",t:3,ab:{again:.25},d:"25% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หงส์ขาว",e:"🦢",t:3,ab:{burnLeaf:6},d:"เผาใบแล้วได้แต้มบุญ +6"},
 {n:"เสือขาวเฝ้าดวง",e:"🐯",t:3,ab:{drop:1.5},d:"โอกาสเจอสัตว์มงคล +1.5%"},
 {n:"สิงโตทอง",e:"🦁",t:3,ab:{cap:1,cdr:.20},d:"เก็บสิทธิ์ฟรีได้เพิ่ม 1 และเวลารอลดลง 20%"},
 {n:"น้องหมีเด้ง",dn:"ลูกช้างทองประจำหิ้ง",e:"🐘",t:2,sp:1,purple:1,ab:{cdr:.10,again:.10},d:""},
 {n:"มังกรทอง",e:"🐉",t:4,ab:{again:.40},d:"40% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"นกยูงราชินี",e:"🦚",t:4,ab:{baseMul:3},d:"โอกาสเจอสัตว์มงคลพื้นฐาน x3 (5% เป็น 15%)"},
 {n:"ฟอร์จูนี่",img:1,t:4,ab:{extra:1},d:"ได้สิทธิ์เขย่าฟรีเพิ่มวันละ 1 ครั้ง"}
];
/* v2 companions: per-level skills, role, and three forms (emoji + name) */
const PET_EXTRA={"หอยทากใจเย็น": {"role": "time", "fn": ["ลูกปลาคาร์ฟ", "ปลาคาร์ฟแดงทอง", "มังกรคาร์ฟข้ามประตู"], "fe": ["🐟", "🎏", "🐉"], "lv": [{"cdr": 0.1, "cap": 1}, {"cdr": 0.15, "cap": 1}, {"cdr": 0.2, "cap": 1}]}, "เต่าน้อยมั่นคง": {"role": "pity", "fn": ["เต่าน้อยมั่นคง", "เต่าโล่ศิลา", "เต่าพิทักษ์พันปี"], "fe": ["🐢", "🐢", "🐢"], "lv": [{"pity": 1}, {"pity": 2}, {"pity": 3}]}, "ลูกเจี๊ยบตัวจิ๋ว": {"role": "gold", "fn": ["ลูกไก่ทอง", "ไก่ทองขันรับโชค", "พญาไก่ฟ้าทอง"], "fe": ["🐥", "🐓", "🐓"], "lv": [{"gold": 0.12}, {"gold": 0.18, "bp": 1}, {"gold": 0.26, "bp": 1}]}, "แฮมสเตอร์แก้มป่อง": {"role": "star", "fn": ["คางคกน้อยคาบเหรียญ", "คางคกสามขาทอง", "เทพคางคกเงินทอง"], "fe": ["🐸", "🐸", "🐸"], "lv": [{"star": 0.8}, {"star": 1.2}, {"star": 1.6}]}, "กบน้อยนำโชค": {"role": "again", "fn": ["ลูกปลาทอง", "ปลาทองหางพลิ้ว", "ราชาปลาทองหางทอง"], "fe": ["🐠", "🐠", "🐠"], "lv": [{"again": 0.05}, {"again": 0.08}, {"again": 0.12}]}, "ผึ้งขยัน": {"role": "bp", "fn": ["ค้างคาวน้อยนำโชค", "ค้างคาวทองห้าพร", "เทพค้างคาวหมื่นโชค"], "fe": ["🦇", "🦇", "🦇"], "lv": [{"bp": 1}, {"bp": 3}, {"bp": 4}]}, "เต่าทองจุดดาว": {"role": "find", "fn": ["ลูกนกสาลิกา", "สาลิกาลิ้นทอง", "พญาสาลิกาเมตตา"], "fe": ["🐤", "🐦", "🐦"], "lv": [{"dropX": 0.19}, {"dropX": 0.28}, {"dropX": 0.42}]}, "เม่นขนนุ่ม": {"role": "ticket", "fn": ["หนูน้อยถุงทอง", "หนูทองแบกเหรียญ", "เทพหนูทรัพย์ล้น"], "fe": ["🐭", "🐭", "🐭"], "lv": [{"tg": 0.05}, {"tg": 0.07}, {"tg": 0.11}]}, "กระรอกเก็บโชค": {"role": "daily", "fn": ["ลูกกวางดาวทอง", "กวางเขาทอง", "กวางเทพลาภยศ"], "fe": ["🦌", "🦌", "🦌"], "lv": [{"daily": 1}, {"daily": 2}, {"daily": 3}]}, "เพนกวินเดินเตาะแตะ": {"role": "dawn", "fn": ["ลูกนกกระเรียน", "กระเรียนรับอรุณ", "กระเรียนเทพพันปี"], "fe": ["🕊️", "🕊️", "🕊️"], "lv": [{"fa": 0.12}, {"fa": 0.18}, {"fa": 0.28}]}, "หนอนน้อยรอบิน": {"role": "leaf", "fn": ["ลูกปลาตะเพียน", "ปลาตะเพียนทอง", "พญาตะเพียนเงินทอง"], "fe": ["🐟", "🐟", "🐟"], "lv": [{"burnLeaf": 3}, {"burnLeaf": 5}, {"burnLeaf": 7}]}, "กระต่ายจันทร์": {"role": "dawn", "fn": ["กระต่ายจันทร์", "กระต่ายกระโดดฟ้า", "เทพกระต่ายพระจันทร์"], "fe": ["🐰", "🐇", "🐇"], "lv": [{"fa": 0.22}, {"fa": 0.32}, {"fa": 0.45}]}, "แพนด้าฟูฟู": {"role": "find", "fn": ["ลูกกิเลน", "กิเลนเกล็ดหยก", "กิเลนเทพนำโชค"], "fe": ["🦄", "🦄", "🦄"], "lv": [{"dropX": 0.33}, {"dropX": 0.48}, {"dropX": 0.67}]}, "แมวนำโชค": {"role": "again", "fn": ["แมวนำโชค", "แมวกวักทองคำ", "เทพแมวกวักเก้าชีวิต"], "fe": ["🐱", "🐈", "🐈‍⬛"], "lv": [{"again": 0.1}, {"again": 0.13}, {"again": 0.18}]}, "หมาน้อยซื่อสัตย์": {"role": "pity", "fn": ["หมาน้อยซื่อสัตย์", "หมาพิทักษ์", "อัศวินสุนัขโล่ทอง"], "fe": ["🐶", "🐕", "🐕‍🦺"], "lv": [{"pity": 2}, {"pity": 3}, {"pity": 4}]}, "โคอาล่าขี้เซา": {"role": "time", "fn": ["ลูกม้าทอง", "ม้าทองควบเมฆ", "ม้าเทพแปดทิศ"], "fe": ["🐴", "🐎", "🐎"], "lv": [{"cdr": 0.17, "cap": 1}, {"cdr": 0.26, "cap": 1}, {"cdr": 0.32, "cap": 2}]}, "หมูนำทรัพย์": {"role": "star", "fn": ["หมูนำทรัพย์", "หมูออมสินทอง", "เทพหมูมหาเศรษฐี"], "fe": ["🐷", "🐖", "🐖"], "lv": [{"star": 1.3}, {"star": 2}, {"star": 2.8}]}, "หมีน้ำผึ้ง": {"role": "daily", "fn": ["ลูกโคทอง", "โคทองพวงมาลัย", "พญาโคทองคำ"], "fe": ["🐮", "🐂", "🐂"], "lv": [{"daily": 2}, {"daily": 3}, {"daily": 4}]}, "เป็ดน้อยลอยน้ำ": {"role": "bp", "fn": ["เป็ดแมนดารินน้อย", "คู่เป็ดแมนดาริน", "เป็ดแมนดารินเทพสมพงศ์"], "fe": ["🦆", "🦆", "🦆"], "lv": [{"bp": 2, "rainbow": 0.01}, {"bp": 4, "rainbow": 0.01}, {"bp": 6, "rainbow": 0.01}]}, "แกะขนเมฆ": {"role": "leaf", "fn": ["แกะขนเมฆ", "แกะเมฆสายฟ้า", "แกะเขาทองเหนือเมฆ"], "fe": ["🐑", "🐑", "🐏"], "lv": [{"burnLeaf": 5}, {"burnLeaf": 7}, {"burnLeaf": 9}]}, "จิ้งจอกไพ่ทาโรต์": {"role": "ticket", "fn": ["จิ้งจอกเงินน้อย", "จิ้งจอกห้าหาง", "จิ้งจอกเก้าหางเทพธิดา"], "fe": ["🦊", "🦊", "🦊"], "lv": [{"tg": 0.15}, {"tg": 0.22}, {"tg": 0.32}]}, "นกฮูกดวงดาว": {"role": "find", "fn": ["นกฮูกดวงดาว", "นกฮูกส่องจักรวาล", "มหาปราชญ์นกฮูกดาราจักร"], "fe": ["🦉", "🦉", "🦉"], "lv": [{"dropX": 0.52}, {"dropX": 0.76}, {"dropX": 1.07}]}, "โลมาสายรุ้ง": {"role": "again", "fn": ["ลูกปลามังกร", "ปลามังกรทอง", "เทพปลามังกรเก้าเกล็ด"], "fe": ["🐡", "🐡", "🐡"], "lv": [{"again": 0.15}, {"again": 0.2}, {"again": 0.26}]}, "ปลาหมึกแปดโชค": {"role": "gold", "fn": ["ลูกปี่เซียะ", "ปี่เซียะหยกทอง", "ปี่เซียะเทพคลังทรัพย์"], "fe": ["🐲", "🐲", "🐲"], "lv": [{"gold": 0.18, "bp": 1}, {"gold": 0.26, "bp": 2}, {"gold": 0.35, "bp": 3}]}, "นกแก้วช่างพูด": {"role": "daily", "fn": ["ลูกนกการเวก", "การเวกปีกทอง", "พญานกการเวกเสียงทิพย์"], "fe": ["🐤", "🐦", "🐦"], "lv": [{"daily": 4}, {"daily": 5}, {"daily": 7}]}, "หมาป่าเดือนเพ็ญ": {"role": "dawn", "fn": ["ลูกช้างเผือก", "ช้างเผือกทรงเครื่อง", "พญาช้างเผือกงาทอง"], "fe": ["🐘", "🐘", "🐘"], "lv": [{"fa": 0.35}, {"fa": 0.5}, {"fa": 0.7}]}, "วาฬฝันหวาน": {"role": "time", "fn": ["ลูกเต่ามังกร", "เต่ามังกรเกล็ดทอง", "พญาเต่ามังกรหมื่นปี"], "fe": ["🐢", "🐢", "🐢"], "lv": [{"cdr": 0.24, "cap": 1}, {"cdr": 0.32, "cap": 2}, {"cdr": 0.45, "cap": 2}]}, "ผีเสื้อราตรี": {"role": "time", "fn": ["นาคน้อยเกล็ดแก้ว", "นาคราชเกล็ดมรกต", "นาคราชบัวทอง"], "fe": ["🐍", "🐍", "🐍"], "lv": [{"cdr": 0.3, "cap": 1, "fa": 0.15}, {"cdr": 0.38, "cap": 2, "fa": 0.2}, {"cdr": 0.45, "cap": 2, "fa": 0.3}]}, "ยูนิคอร์นเมฆ": {"role": "again", "fn": ["ลูกนกฟีนิกซ์", "ฟีนิกซ์ปีกรุ้ง", "ฟีนิกซ์เทพคืนชีพ"], "fe": ["🐣", "🐦", "🐦"], "lv": [{"again": 0.22}, {"again": 0.28}, {"again": 0.35}]}, "หงส์ขาว": {"role": "leaf", "fn": ["หงส์ขาว", "หงส์เพลิงเงิน", "หงส์ฟีนิกซ์ขาว"], "fe": ["🦢", "🦢", "🦢"], "lv": [{"burnLeaf": 6, "gold": 0.08, "bp": 2}, {"burnLeaf": 8, "gold": 0.12, "bp": 3}, {"burnLeaf": 10, "gold": 0.14, "bp": 3}]}, "เสือขาวเฝ้าดวง": {"role": "find", "fn": ["เสือขาวเฝ้าดวง", "เสือขาวลายดาว", "พยัคฆ์ขาวเทวะ"], "fe": ["🐯", "🐅", "🐅"], "lv": [{"dropX": 0.6, "pity": 2}, {"dropX": 0.85, "pity": 3}, {"dropX": 1.2, "pity": 4}]}, "สิงโตทอง": {"role": "star", "fn": ["สิงโตทอง", "สิงโตแผงตะวัน", "ราชสีห์จักรพรรดิทอง"], "fe": ["🦁", "🦁", "🦁"], "lv": [{"star": 3, "daily": 2}, {"star": 5, "daily": 3}, {"star": 7, "daily": 5}]}, "น้องหมีเด้ง": {"role": "time", "fn": ["ลูกช้างทอง", "ช้างทองถือพาน", "ช้างทองประจำหิ้ง"], "fe": ["🐘", "🐘", "🐘"], "lv": [{"cdr": 0.08, "cap": 1, "again": 0.05}, {"cdr": 0.15, "cap": 1, "again": 0.09}, {"cdr": 0.22, "cap": 1, "again": 0.15}]}, "มังกรทอง": {"role": "again", "fn": ["มังกรทอง", "มังกรทองเหินฟ้า", "จักรพรรดิมังกรทอง"], "fe": ["🐲", "🐉", "🐉"], "lv": [{"again": 0.33}, {"again": 0.42}, {"again": 0.52, "againCap": 0.55}]}, "นกยูงราชินี": {"role": "find", "fn": ["นกยูงราชินี", "นกยูงรำแพน", "เทพีนกยูงพันดาว"], "fe": ["🦚", "🦚", "🦚"]}, "ฟอร์จูนี่": {"role": "extra", "fn": ["ฟอร์จูนี่", "ฟอร์จูนี่ปีกแสง", "เทพธิดาฟอร์จูนี่"], "lv": [{"extra": 1}, {"extra": 1, "cdr": 0.15, "fa": 0.3}, {"extra": 1, "cdr": 0.3, "cap": 1, "fa": 0.6}]}};
PETS.forEach(p=>Object.assign(p,PET_EXTRA[p.n]||{}));
/* form names that match the illustrated art (internal pet key p.n stays the same so saves keep working).
   v102: 23 pets were re-drawn as auspicious animals; p.dn is the name players see, p.n is only the save key */
const FN_ART={"ผีเสื้อราตรี":["นาคน้อยเกล็ดแก้ว","นาคราชเกล็ดมรกต","นาคราชบัวทอง"],"ยูนิคอร์นเมฆ":["ลูกนกฟีนิกซ์","ฟีนิกซ์ปีกรุ้ง","ฟีนิกซ์เทพคืนชีพ"],
 "สิงโตทอง":["ลูกสิงโตทอง","สิงโตหนุ่มแผงทอง","ราชสีห์แผงตะวัน"],"น้องหมีเด้ง":["ลูกช้างทอง","ช้างทองถือพาน","ช้างทองประจำหิ้ง"],
 "นกยูงราชินี":["ลูกนกยูงทอง","นกยูงทองรำแพน","ราชินีนกยูงทอง"],"เสือขาวเฝ้าดวง":["ลูกเสือขาวลายฟ้า","เสือขาวผ้าพันคอฟ้า","เสือขาวผู้พิทักษ์ดวง"],
 "หงส์ขาว":["ลูกหงส์ดอกบัว","หงส์ขาวรำน้ำ","ราชินีหงส์มงกุฎฟ้า"],"มังกรทอง":["ลูกมังกรกอดมุก","มังกรทองปีกม่วง","จักรพรรดิมังกรถือมุก"],
 "ฟอร์จูนี่":["ฟอร์จูนี่กอดดาว","ฟอร์จูนี่คทาจันทร์","เทพธิดาฟอร์จูนี่"]};
Object.assign(FN_ART,{"หอยทากใจเย็น": ["ลูกปลาคาร์ฟ", "ปลาคาร์ฟแดงทอง", "มังกรคาร์ฟข้ามประตู"], "เต่าน้อยมั่นคง": ["เต่าน้อยมั่นคง", "เต่าโล่ศิลา", "เต่าพิทักษ์พันปี"], "ลูกเจี๊ยบตัวจิ๋ว": ["ลูกไก่ทอง", "ไก่ทองขันรับโชค", "พญาไก่ฟ้าทอง"], "แฮมสเตอร์แก้มป่อง": ["คางคกน้อยคาบเหรียญ", "คางคกสามขาทอง", "เทพคางคกเงินทอง"], "กบน้อยนำโชค": ["ลูกปลาทอง", "ปลาทองหางพลิ้ว", "ราชาปลาทองหางทอง"], "ผึ้งขยัน": ["ค้างคาวน้อยนำโชค", "ค้างคาวทองห้าพร", "เทพค้างคาวหมื่นโชค"], "เต่าทองจุดดาว": ["ลูกนกสาลิกา", "สาลิกาลิ้นทอง", "พญาสาลิกาเมตตา"], "เม่นขนนุ่ม": ["หนูน้อยถุงทอง", "หนูทองแบกเหรียญ", "เทพหนูทรัพย์ล้น"], "กระรอกเก็บโชค": ["ลูกกวางดาวทอง", "กวางเขาทอง", "กวางเทพลาภยศ"], "เพนกวินเดินเตาะแตะ": ["ลูกนกกระเรียน", "กระเรียนรับอรุณ", "กระเรียนเทพพันปี"], "หนอนน้อยรอบิน": ["ลูกปลาตะเพียน", "ปลาตะเพียนทอง", "พญาตะเพียนเงินทอง"], "กระต่ายจันทร์": ["กระต่ายจันทร์", "กระต่ายกระโดดฟ้า", "เทพกระต่ายพระจันทร์"], "แพนด้าฟูฟู": ["ลูกกิเลน", "กิเลนเกล็ดหยก", "กิเลนเทพนำโชค"], "แมวนำโชค": ["แมวนำโชค", "แมวกวักทองคำ", "เทพแมวกวักเก้าชีวิต"], "หมาน้อยซื่อสัตย์": ["หมาน้อยซื่อสัตย์", "หมาพิทักษ์", "อัศวินสุนัขโล่ทอง"], "โคอาล่าขี้เซา": ["ลูกม้าทอง", "ม้าทองควบเมฆ", "ม้าเทพแปดทิศ"], "หมูนำทรัพย์": ["หมูนำทรัพย์", "หมูออมสินทอง", "เทพหมูมหาเศรษฐี"], "หมีน้ำผึ้ง": ["ลูกโคทอง", "โคทองพวงมาลัย", "พญาโคทองคำ"], "เป็ดน้อยลอยน้ำ": ["เป็ดแมนดารินน้อย", "คู่เป็ดแมนดาริน", "เป็ดแมนดารินเทพสมพงศ์"], "แกะขนเมฆ": ["แกะขนเมฆ", "แกะเมฆสายฟ้า", "แกะเขาทองเหนือเมฆ"], "จิ้งจอกไพ่ทาโรต์": ["จิ้งจอกเงินน้อย", "จิ้งจอกห้าหาง", "จิ้งจอกเก้าหางเทพธิดา"], "นกฮูกดวงดาว": ["นกฮูกดวงดาว", "นกฮูกส่องจักรวาล", "มหาปราชญ์นกฮูกดาราจักร"], "โลมาสายรุ้ง": ["ลูกปลามังกร", "ปลามังกรทอง", "เทพปลามังกรเก้าเกล็ด"], "ปลาหมึกแปดโชค": ["ลูกปี่เซียะ", "ปี่เซียะหยกทอง", "ปี่เซียะเทพคลังทรัพย์"], "นกแก้วช่างพูด": ["ลูกนกการเวก", "การเวกปีกทอง", "พญานกการเวกเสียงทิพย์"], "หมาป่าเดือนเพ็ญ": ["ลูกช้างเผือก", "ช้างเผือกทรงเครื่อง", "พญาช้างเผือกงาทอง"], "วาฬฝันหวาน": ["ลูกเต่ามังกร", "เต่ามังกรเกล็ดทอง", "พญาเต่ามังกรหมื่นปี"]});
PETS.forEach(p=>{if(FN_ART[p.n])p.fn=FN_ART[p.n]});

function Game(init, nowBase, admin) {
  let S = init;
  const now = () => nowBase + (admin ? (S && S.skew) || 0 : 0);
  function rnd() { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; }
/* ===== Fortunie Siamsi game core — shared by server (authoritative) and client (display only) =====
   Expects globals: F, LV, RAR, PETS, S (state), now(), rnd() */
const GOLD_P=.10,JAR=100,BASE_DROP=10,BURN_PTS=3,GOLD_X=5,JAR_ODDS=[[2,80],[3,15],[4,5]],SHARD_GET=[1,1,1,2,2],SHARD_COST=[10,8,6,5,4],
  DAY=24*3600e3,BASE_WAIT=DAY,CDR_CAP=.50,AGAIN_CAP=.50,BURNFREE_CAP=.60,PITY=10,EXP=7*DAY,MAXLV=3,COST=10,INV_MAX=30,INV_WARN=25,LUCKY=22,TZ=7*3600e3;
const LVM=[1,1.5,2];
const LVPOW={"ดีมาก":.10,"ดี":.06,"ค่อยเป็นค่อยไป":.03};
const BUFF=[{n:"โชคพบสัตว์มงคล",d:s=>`โอกาสเจอสัตว์มงคลเพิ่มขึ้น ${Math.round(s*100)}% ทั้งวัน`},{n:"โชคเวลา",d:s=>`เวลารอเขย่าฟรีลดลง ${Math.round(s*100)}% ทั้งวัน`},{n:"โชคซ้ำ",d:s=>`โอกาสได้เขย่าฟรีซ้ำ +${Math.round(s*100)}% ทั้งวัน`}];
/* guided tutorial: a brand-new player's first draws are scripted so the lesson can show each system.
   only for accounts that started with the tutorial and have never paid money; the screen says these rounds are arranged */
const TUT_CAT="แมวนำโชค",TUT_DUCK="เป็ดน้อยลอยน้ำ";
const tutRig=()=>!!S.tutF&&!(S.topBaht>0);
function tutSlip(kind){const ids=F.map((x,i)=>i).filter(i=>kind==="good"?(F[i][0]==="ดีมาก"&&i%3===0):F[i][0]==="ค่อยเป็นค่อยไป");return ids[Math.floor(rnd()*ids.length)]}
function tutPet(n){const pi=PETS.findIndex(p=>p.n===n);S.rar[PETS[pi].t]++;S.petDrops++;return giveCopy(pi)}
const REW=[{l:5},{l:5},{l:10},{l:10},{l:15},{l:20},{pet:"น้องหมีเด้ง"}],REW_NEW=[{l:100},{l:100},{l:150},{l:150},{l:200},{l:200},{pet:"น้องหมีเด้ง"}];
const rewTable=()=>(S.dailyTot||0)<7?REW_NEW:REW; /* the first 7 check-ins of every player give the big welcome rewards */
const LEAF_SHOP=[{id:"t",n:"เซียมเรียกผู้พิทักษ์",cost:60},{id:"rt",n:"เซียมเรียกแรร์+",cost:250}];
const DEFAULT_PACKS=[{baht:49,stars:50},{baht:99,stars:110,tag:"คุ้มกว่า 10%"},{baht:199,stars:240,tag:"แถม 40 เหรียญทอง"},{baht:399,stars:520,tag:"แถม 120 เหรียญทอง"}];
const NEED_T=[[1,6,12],[1,5,10],[1,4,8],[1,3,6],[1,3,5]],NEED_OLD=[[1,2,8],[1,2,6],[1,2,5],[1,2,4],[1,2,3]];
const NEED=p=>NEED_T[p?p.t:2]||[1,2,3];
const lvOf=(k,p)=>{const n=NEED(p);let l=1;for(let i=1;i<n.length;i++)if((k||1)>=n[i])l=i+1;const m=p&&S&&S.lvMin&&S.lvMin[p.n];return m>l&&(k||0)>0?m:l};
/* v86 level table change: keep every level a player already reached under the old table */
function keepLevels(){if(S.lvV===2)return;S.lvMin=S.lvMin||{};for(const p of PETS){const k=S.owned&&S.owned[p.n]||0;if(!k)continue;const n=NEED_OLD[p.t]||[1,2,3];let l=1;for(let i=1;i<n.length;i++)if(k>=n[i])l=i+1;if(l>1)S.lvMin[p.n]=Math.max(S.lvMin[p.n]||1,l)}S.lvV=2}
const maxCopies=p=>NEED(p)[MAXLV-1];
const toNext=(k,p)=>{const L=lvOf(k,p);return L<MAXLV?NEED(p)[L]-(k||0):0};
/* day key in Thailand time, so check-in resets at local midnight on server and client alike */
const dk=t=>{const d=new Date(t+TZ);return d.getUTCFullYear()+"-"+(d.getUTCMonth()+1)+"-"+d.getUTCDate()};

function fresh(){return{v:6,stars:30,leaves:60,leafGift:1,tutF:1,tutS:0,owned:{},buddy:null,shakes:0,petDrops:0,spent:0,topBaht:0,burned:0,rar:[0,0,0,0,0],lv:{"ดีมาก":0,"ดี":0,"ค่อยเป็นค่อยไป":0},
  charges:1,regenAt:0,skew:0,last:null,pend:null,bonusFree:0,bp:0,jarT:0,jars:0,golds:0,shards:[0,0,0,0,0],inv:[],active:null,useReadyAt:0,tickets:0,rtickets:0,pity:0,
  streakN:0,streakDay:"",inbox:[],showcase:[],avatar:-1,avatarL:0,frame:"none"}}
function norm(){if(!Array.isArray(S.shards))S.shards=[0,0,0,0,0];if(!Array.isArray(S.inv))S.inv=[];if(!Array.isArray(S.inbox))S.inbox=[];if(!S.owned)S.owned={};if(!Array.isArray(S.rar))S.rar=[0,0,0,0,0];if(!Array.isArray(S.showcase))S.showcase=[];keepLevels();if(typeof S.leaves!=="number"||!(S.leaves>=0))S.leaves=0;if(!S.leafGift){S.leafGift=1;S.leaves+=60;if(Array.isArray(S.inbox))S.inbox.push({at:now(),msg:"ของขวัญเปิดระบบแต้มบุญ +60 แต้มบุญ 🪷"})}}

/* collection score: each pet you own scores its level (Lv.1 = 1, Lv.2 = 2, Lv.3 = 3) */
function collScore(){let s=0;for(const p of PETS){const k=S.owned[p.n];if(k)s+=lvOf(k,p)}return s}
const SHOW_MAX=1;
const FRAMES=[{id:"none",n:"ไม่มีกรอบ"},{id:"gold",n:"ทองมงคล"},{id:"sakura",n:"ซากุระ"},{id:"star",n:"ดาวราตรี"}];
function actProfile(avatar,frame,L){avatar=+avatar;if(avatar>=0){const p=PETS[avatar];if(!p||!S.owned[p.n])throw "ยังไม่มีสัตว์มงคลตัวนี้"}else avatar=-1;
  if(!FRAMES.some(f=>f.id===frame))throw "ไม่มีกรอบนี้";S.avatar=avatar;S.frame=frame;L=Math.trunc(+L||0);S.avatarL=L>=1&&L<=3?L:0;return{avatar,frame,L:S.avatarL}}
function avatarOut(){const a=S.avatar;return a!=null&&a>=0&&PETS[a]&&S.owned[PETS[a].n]?{pi:a,L:(()=>{const cur=lvOf(S.owned[PETS[a].n],PETS[a]),w=+S.avatarL||0;return w>=1&&w<=cur?w:cur})()}:{pi:-1,L:1}}
function actShowcase(pis){if(!Array.isArray(pis))throw "เลือกสัตว์มงคลไม่ถูกต้อง";const out=[];
  for(const v of pis.slice(0,SHOW_MAX)){const pi=+v;if(!(pi>=0&&pi<PETS.length))throw "เลือกสัตว์มงคลไม่ถูกต้อง";if(!S.owned[PETS[pi].n])throw "ยังไม่มีสัตว์มงคลตัวนี้";if(!out.includes(pi))out.push(pi)}
  S.showcase=out;return{showcase:out}}
function showcaseOut(){return(S.showcase||[]).filter(pi=>PETS[pi]&&S.owned[PETS[pi].n]).slice(0,SHOW_MAX).map(pi=>({pi,L:lvOf(S.owned[PETS[pi].n],PETS[pi])}))}
function buffOf(f){return{type:f%3,s:LVPOW[F[f][0]]}}
function activeBuff(){return S.active&&S.active.until>now()?Object.assign(buffOf(S.active.f),{f:S.active.f}):null}
function buddyPet(){const i=S.buddy;return i!=null&&PETS[i]&&S.owned[PETS[i].n]?PETS[i]:null}
function powers(){const P={burnLeaf:0,cdr:0,drop:0,dropX:0,again:0,cap:0,star:0,burnFree:0,extra:0,baseMul:1,gold:0,bp:0,pity:0,daily:0,tg:0,fa:0,bf:0,againCap:AGAIN_CAP};
  const p=buddyPet();if(p){const L=lvOf(S.owned[p.n],p);
    if(p.lv){Object.assign(P,p.lv[L-1]);if(!P.baseMul)P.baseMul=1;if(!P.againCap)P.againCap=AGAIN_CAP}
    else{const a=p.ab,m=LVM[L-1];P.cdr=(a.cdr||0)*m;P.drop=(a.drop||0)*m;P.again=(a.again||0)*m;P.cap=a.cap||0;P.star=Math.round((a.star||0)*m);P.extra=a.extra||0;if(a.baseMul)P.baseMul=a.baseMul+(m-1);if(a.burnFree)P.burnFree=a.burnFree*m;if(a.burnLeaf)P.burnLeaf=a.burnLeaf}}
  P.cdr=Math.min(CDR_CAP,P.cdr);P.again=Math.min(P.againCap,P.again);P.burnFree=Math.min(BURNFREE_CAP,P.burnFree);P.max=1+P.cap+P.extra;P.wait=BASE_WAIT*(1-P.cdr)/(1+P.extra);P.dropPct=BASE_DROP*P.baseMul*(1+P.dropX)+P.drop;
  const b=activeBuff();if(b){b.s+=P.bf;P.buff=b;if(b.type===0)P.dropPct*=1+b.s;if(b.type===1)P.wait*=1-b.s;if(b.type===2)P.again=Math.min(P.againCap,P.again+b.s)}
  return P}
function regen(){memTick();const P=powers();if(S.charges>=P.max){S.regenAt=0;return}
  if(!S.regenAt)S.regenAt=now()+P.wait;
  while(S.charges<P.max&&now()>=S.regenAt){S.charges++;S.regenAt=S.charges<P.max?S.regenAt+P.wait:0}}
function prune(){const before=S.inv.length;S.inv=S.inv.filter(it=>!it.at||now()-it.at<EXP);const gone=before-S.inv.length;if(gone)S.leaves=(S.leaves||0)+gone;return gone}
const freeLeft=()=>S.charges+S.bonusFree;
function canUseToday(){return !(S.useReadyAt>now())&&!activeBuff()}
const streakState=()=>{const today=dk(now()),yest=dk(now()-DAY),claimed=S.streakDay===today;return{claimed,next:claimed?S.streakN:(S.streakDay===yest?S.streakN%7+1:1)}};

/* rates: normal = RAR[i].share (shake drops + normal ticket), rare ticket = RATE_R (แรร์/เอพิก/ตำนาน only); admin sets both in config */
const RATE_N0=[50,28,14,6,2],RATE_R0=[0,0,70,24,6];let RATE_R=RATE_R0.slice();
function cleanRates(arr,def,minT){if(!Array.isArray(arr)||arr.length!==RAR.length)return def.slice();const v=arr.map((x,i)=>i<minT?0:Math.max(0,Math.min(100,Math.round((+x||0)*10)/10)));const s=v.reduce((a,b)=>a+b,0);return Math.abs(s-100)<0.05?v:def.slice()}
function applyRates(rt){const n=cleanRates(rt&&rt.n,RATE_N0,0);RAR.forEach((r,i)=>r.share=n[i]);RATE_R=cleanRates(rt&&rt.r,RATE_R0,2);return{n,r:RATE_R.slice()}}
function pickRarity(w){w=w||RAR.map(r=>r.share);const tot=w.reduce((a,b)=>a+b,0)||1;let r=rnd()*tot;for(let i=0;i<w.length;i++){if(r<w[i])return i;r-=w[i]}for(let i=w.length-1;i>=0;i--)if(w[i]>0)return i;return 0}
function giveCopy(pi){const p=PETS[pi],n=p.n,isNew=!S.owned[n];S.owned[n]=(S.owned[n]||0)+1;let shard=0;
  if(S.owned[n]>maxCopies(p)){shard=SHARD_GET[p.t];S.shards[p.t]=(S.shards[p.t]||0)+shard}
  if(S.buddy==null)S.buddy=pi;return{pi,isNew,shard,k:S.owned[n]}}
function poolOf(t){return PETS.map((p,i)=>i).filter(i=>PETS[i].t===t&&!PETS[i].sp)}
function rollPet(rare){const r=pickRarity(rare?RATE_R:null),pool=poolOf(r),pi=pool[Math.floor(rnd()*pool.length)];S.rar[r]++;S.petDrops++;return giveCopy(pi)}
/* when the box is full the oldest slip turns into 1 star dust, never lost for nothing */
function addInv(f){S.inv.unshift({id:String(now())+String(Math.floor(rnd()*1e6)),f,at:now()});let over=0;while(S.inv.length>INV_MAX){S.inv.pop();S.leaves=(S.leaves||0)+1;over++}if(over)S.overflow=(S.overflow||0)+over;return over}
function activate(f){S.active={f,until:now()+DAY};S.useReadyAt=now()+DAY}

/* ----- actions (server runs these; each throws a Thai message on misuse) ----- */
function settlePending(){if(S.pend){addInv(S.pend.f);if(S.last)S.last.fate="kept";S.pend=null}}
function actShake(paid){let paidUsed=false;settlePending();regen();const P=powers();if(S.inv.length>=INV_MAX)throw "คลังเต็มแล้ว เผาหรือใช้ใบในคลังก่อน แล้วค่อยเขย่าใหม่นะคะ";
  if(S.bonusFree>0)S.bonusFree--;
  else if(S.charges>0){S.charges--;if(!S.regenAt)S.regenAt=now()+P.wait}
  else if(paid){if(S.stars<COST)throw "เหรียญทองไม่พอ เติมเหรียญทองก่อนนะคะ";S.stars-=COST;S.spent+=COST;paidUsed=true}
  else throw "ยังไม่มีสิทธิ์เขย่าฟรี";
  const rig=tutRig()?(S.shakes===0?1:(S.shakes===1&&paidUsed?2:0)):0;const f=rig===1?tutSlip("good"):rig===2?tutSlip("bad"):Math.floor(rnd()*F.length);S.lv[F[f][0]]=(S.lv[F[f][0]]||0)+1;S.shakes++;S.starFrac=(S.starFrac||0)+P.star;const ws=Math.floor(S.starFrac+1e-9);S.leaves=(S.leaves||0)+ws;S.starFrac-=ws;
  let tg=false;if(F[f][0]==="ดีมาก"&&P.tg&&rnd()<P.tg){S.tickets++;tg=true}
  let fa=false;const today=dk(now());if(S.faDay!==today){S.faDay=today;if(P.fa&&rnd()<P.fa){S.bonusFree++;fa=true}}
  const ticket=f===LUCKY;if(ticket)S.tickets++;
  S.pity=(S.pity||0)+1;let pet=null,isNew=false,shard=0;
  if(rig===1){const r=tutPet(TUT_CAT);S.pity=0;pet=r.pi;isNew=r.isNew;shard=r.shard}else if(rig===2){}
  else if(S.petDrops===0||S.pity>=PITY-P.pity||rnd()*100<P.dropPct){const r=rollPet();S.pity=0;pet=r.pi;isNew=r.isNew;shard=r.shard}
  const again=rig===2||(rig!==1&&rnd()<P.again);if(again)S.bonusFree++;
  const cur={f,pet,isNew,shard,again,ticket,tg,fa,at:now(),fate:"pending"};S.last=cur;S.pend={f};return cur}
function burnReward(){const P=powers(),tutRb=tutRig()&&S.tutS===12&&!S.tutRb;if(tutRb)S.tutRb=1;const rainbow=tutRb||(P.rainbow>0&&rnd()<P.rainbow),gold=!rainbow&&rnd()<GOLD_P+P.gold,pts=rainbow?JAR:(BURN_PTS+P.bp)*(gold?GOLD_X:1);if(rainbow)S.rainbows=(S.rainbows||0)+1;S.burned++;if(gold)S.golds=(S.golds||0)+1;/* gold fire: ash x5 only, no free shake, leaves not multiplied */
  const lucky=false,leaf=Math.max(0,Math.round(P.burnLeaf||0));if(leaf)S.leaves=(S.leaves||0)+leaf;
  const before=S.bp||0;S.bp=before+pts;let jar=0;while(S.bp>=JAR){S.bp-=JAR;S.jarT=(S.jarT||0)+1;S.jars=(S.jars||0)+1;jar++}
  return{gold,rainbow,pts,jar,lucky,leaf,before}}
function actDecide(fate){if(!S.pend)throw "ไม่มีใบที่รอเลือก";const f=S.pend.f;S.pend=null;
  if(fate==="use"){if(!canUseToday()){addInv(f);if(S.last)S.last.fate="kept";return{fate:"kept",f}}activate(f);if(S.last)S.last.fate="used";return{fate:"used",f}}
  if(fate==="burn"){const r=burnReward();if(S.last)S.last.fate="burned";return Object.assign({fate:"burned",f},r)}
  addInv(f);if(S.last)S.last.fate="kept";return{fate:"kept",f}}
function invIndex(id){const i=S.inv.findIndex(x=>x.id===id);if(i<0)throw "ไม่พบใบนี้ในคลัง";return i}
function actUseSlip(id){settlePending();const i=invIndex(id);if(!canUseToday())throw "วันนี้ใช้ดวงไปแล้ว";const f=S.inv[i].f;S.inv.splice(i,1);activate(f);return{f}}
function actBurnSlip(id){settlePending();const i=invIndex(id);const f=S.inv[i].f;S.inv.splice(i,1);return Object.assign({f},burnReward())}
function actBurnMany(ids){settlePending();if(!Array.isArray(ids)||!ids.length)throw "ยังไม่ได้เลือกใบ";const before=S.bp||0,fs=[];let pts=0,golds=0,lucky=0,jar=0,leaf=0,rainbows=0;
  for(const id of ids){const i=S.inv.findIndex(x=>x.id===id);if(i<0)continue;fs.push(S.inv[i].f);S.inv.splice(i,1);const r=burnReward();pts+=r.pts;leaf+=r.leaf;if(r.rainbow)rainbows++;if(r.gold)golds++;if(r.lucky)lucky++;jar+=r.jar}
  if(!fs.length)throw "ไม่พบใบที่เลือกในคลัง";return{n:fs.length,f:fs[0],pts,golds,lucky,leaf,rainbows,rainbow:rainbows>0,jar,before,gold:golds>0}}
function actTicket(rare){settlePending();if(rare){if(!(S.rtickets>0))throw "ไม่มีเซียมเรียกแรร์+";S.rtickets--;return Object.assign(rollPet(true),{rare:true})}if(S.tickets<1)throw "ไม่มีเซียมเรียกผู้พิทักษ์";S.tickets--;if(tutRig()&&!S.tutDuck){S.tutDuck=1;return Object.assign(tutPet(TUT_DUCK),{tut:true})}return rollPet()}
/* v100 altar: pick a deity; change the water then light incense = the daily check-in; a private wish book */
const DEITY_KEYS=["lakshmi","buddha","guanyin","vessavana"];
/* v107 forgiving streak: missing one day keeps the streak, up to FZ_MAX times per month */
var FZ_MAX=2;
function altarS(){if(!S.altar||typeof S.altar!=="object")S.altar={};const A=S.altar;A.d=A.d||"";A.w=A.w||"";A.i=A.i||"";A.iAt=+A.iAt||0;A.st=+A.st||0;A.last=A.last||"";A.tot=+A.tot||0;if(!Array.isArray(A.wish))A.wish=[];return A}
function actAltar(op,arg){const A=altarS(),today=dk(now());
  if(op==="pick"){if(!DEITY_KEYS.includes(arg))throw "ไม่พบองค์นี้";A.d=arg;return{ok:1}}
  if(op==="water"){if(!A.d)throw "เลือกองค์ที่จะบูชาก่อนนะคะ";A.w=today;return{ok:1}}
  if(op==="incense"){if(!A.d)throw "เลือกองค์ที่จะบูชาก่อนนะคะ";if(A.w!==today)throw "เปลี่ยนน้ำพระก่อนนะคะ";if(A.i===today)throw "วันนี้จุดธูปแล้วค่ะ";
    A.i=today;A.iAt=now();const mk=today.split("-").slice(0,2).join("-");if(A.fzM!==mk){A.fzM=mk;A.fz=0}let saved=0;if(A.last===dk(now()-DAY))A.st++;else if(A.st>0&&A.last===dk(now()-2*DAY)&&A.fz<FZ_MAX){A.fz++;A.st++;saved=1}else A.st=1;if(A.mk!==mk){A.mk=mk;A.mn=0}A.mn=(+A.mn||0)+1;A.last=today;A.tot++;if(A.st>=7)A.glow=1;if(A.st>=30)A.cloth=1;
    const daily=streakState().claimed?null:actDaily(),bonus=altarBonus();return{st:A.st,tot:A.tot,daily,mem:bonus.mem,sp:bonus.sp,saved,mn:A.mn,fzLeft:FZ_MAX-A.fz}}
  if(op==="wish"){const t=String(arg||"").replace(/[\u0000-\u001f<>]/g,"").replace(/\s+/g," ").trim().slice(0,120);if(!t)throw "พิมพ์คำขอพรก่อนนะคะ";
    if(A.wish.filter(w=>!w.ok).length>=10)throw "จดคำขอพรได้สูงสุด 10 ข้อ ลองกดสมหวังหรือลบข้อเก่าก่อนนะคะ";A.wish.unshift({id:"w"+now().toString(36)+Math.floor(rnd()*1e4),t,at:now()});A.wish=A.wish.slice(0,30);return{ok:1}}
  if(op==="wish_ok"){const w=A.wish.find(x=>x.id===arg);if(!w||w.ok)throw "ไม่พบคำขอนี้";w.ok=now();let l=0;if(now()-w.at>=3*DAY&&A.wOk!==today){A.wOk=today;l=10;S.leaves=(S.leaves||0)+l}return{l}}
  if(op==="wish_del"){A.wish=A.wish.filter(x=>x.id!==arg);return{ok:1}}
  throw "คำสั่งไม่ถูกต้อง"}
/* v101 music unlocks + meditation reward */
const BGM_PAID=["wind","stream","china"],BGM_COST=200,MED_SEC=600;
/* v109 timed breathing: 1 / 3 / 5 / 10 minutes, merit for the first finish of the day by length */
var BREATH_MIN=[1,3,5,10],BREATH_L={1:3,3:5,5:8,10:10};
function actMus(op,arg){const today=dk(now());
  if(op==="buy"){if(!BGM_PAID.includes(arg))throw "ไม่พบเพลงนี้";S.bgm=Array.isArray(S.bgm)?S.bgm:[];if(S.bgm.includes(arg))return{ok:1};if((S.leaves||0)<BGM_COST)throw "แต้มบุญไม่พอ ต้องใช้ "+BGM_COST+" แต้มบุญ";S.leaves-=BGM_COST;S.bgm.push(arg);return{ok:1}}
  if(op==="med_start"){const m=Math.trunc(+arg);S.medMin=BREATH_MIN.includes(m)?m:10;S.medAt=now();return{ok:1,min:S.medMin}}
  if(op==="med_done"){const m=BREATH_MIN.includes(+S.medMin)?+S.medMin:10;if(!S.medAt||now()-S.medAt<(m*60-5)*1000)throw "หายใจให้ครบ "+m+" นาทีก่อนนะคะ";S.medAt=0;let l=0;if(S.medDay!==today){S.medDay=today;l=BREATH_L[m];S.leaves=(S.leaves||0)+l}return{l,min:m}}
  throw "คำสั่งไม่ถูกต้อง"}
function actTut(s,done){S.tutS=Math.max(S.tutS||0,Math.max(0,Math.min(99,Math.floor(+s||0))));if(done){S.tutF=0;S.tutS=99}return{tutS:S.tutS}}
function actJar(){settlePending();if(!(S.jarT>0))throw "ยังไม่มีไหสะสมบุญเต็ม";S.jarT--;let r=rnd()*100,t=2;for(const [tt,w] of JAR_ODDS){if(r<w){t=tt;break}r-=w}if(tutRig()&&!S.tutJar){S.tutJar=1;t=2}
  const pool=poolOf(t),pi=pool[Math.floor(rnd()*pool.length)];S.rar[t]++;return giveCopy(pi)}
function actExchange(t,pi){settlePending();t=+t;pi=+pi;const p=PETS[pi];if(!p||p.t!==t||p.sp)throw "เลือกสัตว์มงคลไม่ถูกระดับ";
  if((S.shards[t]||0)<SHARD_COST[t])throw "เศษไม่พอ";if((S.owned[p.n]||0)>=maxCopies(p))throw "ตัวนี้เก็บครบแล้ว";S.shards[t]-=SHARD_COST[t];return giveCopy(pi)}
function actBuddy(pi){pi=+pi;const p=PETS[pi];if(!p||!S.owned[p.n])throw "ยังไม่มีสัตว์มงคลตัวนี้";S.buddy=pi;return{pi}}
function actDaily(){const st=streakState();if(st.claimed)throw "รับของวันนี้ไปแล้ว";S.streakN=st.next;S.streakDay=dk(now());const r=rewTable()[S.streakN-1];S.dailyTot=(S.dailyTot||0)+1;
  const dp=powers().daily||0;S.leaves=(S.leaves||0)+dp+(r.l||0);if(r.pet)giveCopy(PETS.findIndex(p=>p.n===r.pet));return{day:S.streakN,l:(r.l||0)+dp,bonus:dp,pet:r.pet||null}}
function actLeafBuy(id,n){const it=LEAF_SHOP.find(x=>x.id===id);if(!it)throw "ไม่มีของชิ้นนี้";n=Math.max(1,Math.min(10,Math.floor(+n||1)));const cost=it.cost*n;if((S.leaves||0)<cost)throw "แต้มบุญไม่พอ";S.leaves-=cost;S.leafSpent=(S.leafSpent||0)+cost;if(id==="t")S.tickets=(S.tickets||0)+n;else S.rtickets=(S.rtickets||0)+n;return{id,n,leaves:S.leaves}}
function summary(){return{stars:S.stars,leaves:S.leaves||0,shakes:S.shakes,pets:PETS.filter(p=>S.owned[p.n]).length,topBaht:S.topBaht||0,tickets:S.tickets,rtickets:S.rtickets||0,bp:S.bp||0,jarT:S.jarT||0}}
/* SHOP_RULES v102: altar decorations, membership, wallpapers (prices in gold coins = S.stars), special days, birthday colour */
const DECOR=[{id:"shelf_jade",s:"shelf",n:"หิ้งหยกเขียว",c:99},{id:"shelf_cloud",s:"shelf",n:"หิ้งเมฆขาว",c:99},{id:"shelf_redgold",s:"shelf",n:"หิ้งแดงทอง",c:199},
  {id:"cloth_pink",s:"cloth",n:"ผ้าแพรชมพู วันอังคาร",c:29},{id:"cloth_gold",s:"cloth",n:"ผ้าแพรทอง",c:0,mem:1},{id:"garland_jasmine",s:"garland",n:"พวงมาลัยมะลิ",c:29},
  {id:"incense_gold",s:"incense",n:"กระถางธูปทอง",c:99},{id:"incense_dragon",s:"incense",n:"กระถางธูปมังกร",c:199},{id:"candle_lotus",s:"candle",n:"เทียนบัวทอง",c:19},
  {id:"glass_crystal",s:"glass",n:"แก้วน้ำคริสตัล",c:29},{id:"lantern",s:"lantern",n:"โคมแดงมงคล",c:19},{id:"bg_temple",s:"bg",n:"ฉากวัดยามเย็น",c:99},{id:"bg_night",s:"bg",n:"ฉากฟ้าราตรี",c:99},
  {id:"cloth_yellow",s:"cloth",n:"ผ้าแพรเหลือง วันจันทร์",c:29},{id:"cloth_green",s:"cloth",n:"ผ้าแพรเขียว วันพุธ",c:29},{id:"cloth_orange",s:"cloth",n:"ผ้าแพรส้ม วันพฤหัสฯ",c:29},
  {id:"cloth_skyblue",s:"cloth",n:"ผ้าแพรฟ้า วันศุกร์",c:29},{id:"cloth_purple",s:"cloth",n:"ผ้าแพรม่วง วันเสาร์",c:29},{id:"cloth_red",s:"cloth",n:"ผ้าแพรแดง วันอาทิตย์",c:29},
  {id:"garland_marigold",s:"garland",n:"มาลัยดาวเรือง",c:29},{id:"garland_rose",s:"garland",n:"มาลัยกุหลาบมะลิ",c:39},{id:"garland_dokrak",s:"garland",n:"มาลัยดอกรัก",c:29},
  {id:"vase_orchid",s:"vase",n:"แจกันกล้วยไม้",c:49},{id:"vase_bamboo",s:"vase",n:"แจกันไผ่กวักทรัพย์",c:49},{id:"vase_rose",s:"vase",n:"แจกันกุหลาบ",c:49},
  {id:"candle_gold",s:"candle",n:"เทียนทองบัวตูม",c:29},{id:"candle_red",s:"candle",n:"เทียนแดงมังกร",c:29},{id:"glass_lotus",s:"glass",n:"แก้วบัวชมพู",c:29},
  {id:"incense_lotus",s:"incense",n:"กระถางธูปบัวขาว",c:99},{id:"lantern_lotus",s:"lantern",n:"โคมบัวชมพู",c:29},{id:"lantern_lanna",s:"lantern",n:"โคมดาวล้านนา",c:29},
  {id:"shelf_lotus",s:"shelf",n:"หิ้งบัวขาวทอง",c:149},{id:"bg_lotus",s:"bg",n:"ฉากบึงบัวยามเย็น",c:99},{id:"bg_loykrathong",s:"bg",n:"ฉากคืนลอยกระทง",c:99},{id:"bg_cny",s:"bg",n:"ฉากตรุษจีน",c:99}];
const DECOR_SETS=[{id:"set_loy",n:"ชุดลอยกระทง",c:149,items:["bg_loykrathong","lantern_lanna","garland_marigold","candle_gold"]},
  {id:"set_lotus",n:"ชุดหิ้งบัวชมพู",c:349,items:["shelf_lotus","incense_lotus","glass_lotus","lantern_lotus","vase_rose","bg_lotus"]},
  {id:"set_dragon",n:"ชุดหิ้งแดงมังกร",c:299,items:["shelf_redgold","incense_dragon","lantern","bg_temple"]},
  {id:"set_cny",n:"ชุดตรุษจีน",c:169,items:["bg_cny","cloth_red","candle_red","vase_bamboo"]}];
const DECOR_SLOTS=[["shelf","ตัวหิ้ง"],["cloth","ผ้าแพร"],["garland","พวงมาลัย"],["vase","แจกันดอกไม้"],["incense","กระถางธูป"],["candle","เทียน"],["glass","แก้วน้ำ"],["lantern","โคมไฟ"],["bg","ฉากหลัง"]];
const WALLS=["sun","mon","tue","wed","thu","fri","sat"],WALL_COST=19,MEM_COST=199,MEM_DAYS=30,MEM_ALTAR=20;
const FIRST_PACK={baht:19,stars:30,rt:1,decor:"candle_lotus"};
function decS(){if(!S.dec||typeof S.dec!=="object")S.dec={};const D=S.dec;if(!Array.isArray(D.own))D.own=[];if(!D.on||typeof D.on!=="object")D.on={};if(!Array.isArray(S.walls))S.walls=[];return D}
const isMem=()=>(+S.mem||0)>now();
function decHas(id){const it=DECOR.find(x=>x.id===id);if(!it)return id==="cloth30"&&!!(S.altar&&S.altar.cloth);return it.mem?isMem():decS().own.includes(id)}
function decOn(slot){const D=decS(),id=D.on[slot];if(id&&decHas(id))return id;if(slot==="cloth"&&id!=="none"&&S.altar&&S.altar.cloth)return "cloth30";return ""}
function giveDecor(id){const D=decS(),it=DECOR.find(x=>x.id===id);if(!it)return;if(!D.own.includes(id))D.own.push(id);if(!D.on[it.s])D.on[it.s]=id}
/* members get one extra free shake each Thai day */
function memTick(){if(!isMem())return 0;const d=dk(now());if(S.memDay===d)return 0;S.memDay=d;S.bonusFree=(S.bonusFree||0)+1;return 1}
function payCoins(c){if((S.stars||0)<c)throw "เหรียญทองไม่พอ เติมเหรียญทองก่อนนะคะ";S.stars-=c;S.spent=(S.spent||0)+c}
function actShop(op,arg){const D=decS();arg=String(arg||"");
  if(op==="buy"){const set=DECOR_SETS.find(x=>x.id===arg);
    if(set){const need=set.items.filter(i=>!D.own.includes(i));if(!need.length)throw "มีครบชุดนี้แล้วค่ะ";const c=Math.min(set.c,need.reduce((a,i)=>a+DECOR.find(x=>x.id===i).c,0));payCoins(c);need.forEach(i=>D.own.push(i));set.items.forEach(i=>{D.on[DECOR.find(x=>x.id===i).s]=i});return{id:arg,c,items:need}}
    const it=DECOR.find(x=>x.id===arg);if(!it)throw "ไม่มีของชิ้นนี้";if(it.mem)throw "ชิ้นนี้สำหรับสมาชิกสายมูค่ะ";if(D.own.includes(it.id))throw "มีชิ้นนี้แล้วค่ะ";payCoins(it.c);D.own.push(it.id);D.on[it.s]=it.id;return{id:it.id,c:it.c}}
  if(op==="wear"){const i=arg.indexOf(":"),slot=i<0?arg:arg.slice(0,i),id=i<0?"":arg.slice(i+1);if(!DECOR_SLOTS.some(x=>x[0]===slot))throw "ไม่มีช่องนี้";
    if(!id){D.on[slot]=slot==="cloth"?"none":"";return{slot,id:""}}
    if(id==="cloth30"){if(slot!=="cloth"||!decHas("cloth30"))throw "ยังไม่ได้ผ้าแพรชิ้นนี้";D.on.cloth="cloth30";return{slot,id}}
    const it=DECOR.find(x=>x.id===id);if(!it||it.s!==slot)throw "ไม่มีของชิ้นนี้";if(!decHas(id))throw it.mem?"ชิ้นนี้สำหรับสมาชิกสายมูค่ะ":"ยังไม่มีชิ้นนี้";D.on[slot]=id;return{slot,id}}
  if(op==="mem"){payCoins(MEM_COST);S.mem=Math.max(now(),+S.mem||0)+MEM_DAYS*DAY;S.memBuys=(S.memBuys||0)+1;memTick();return{until:S.mem,c:MEM_COST}}
  if(op==="wall"){if(!WALLS.includes(arg))throw "ไม่มีวอลเปเปอร์นี้";if(S.walls.includes(arg)||isMem())return{ok:1,free:1};payCoins(WALL_COST);S.walls.push(arg);return{ok:1,c:WALL_COST}}
  if(op==="bday"){const n=arg===""?-1:Math.trunc(+arg);if(!(n>=-1&&n<=6))throw "เลือกวันเกิดไม่ถูกต้อง";S.bday=n;return{bday:n}}
  throw "คำสั่งไม่ถูกต้อง"}
/* วันพระ (Thai Buddhist holy days, from the Thai calendar) and days the owner adds in the admin page give extra merit at the altar */
const WANPRA="2026-10-26,2026-11-03,2026-11-09,2026-11-17,2026-11-24,2026-12-02,2026-12-09,2026-12-17,2026-12-24,2027-01-01,2027-01-07,2027-01-15,2027-01-22,2027-01-30,2027-02-06,2027-02-14,2027-02-21,2027-03-01,2027-03-07,2027-03-15,2027-03-22,2027-03-30,2027-04-06,2027-04-14,2027-04-21,2027-04-29,2027-05-05,2027-05-13,2027-05-20,2027-05-28,2027-06-04,2027-06-12,2027-06-19,2027-06-27,2027-07-03,2027-07-11,2027-07-18,2027-07-26,2027-08-02,2027-08-10,2027-08-17,2027-08-25,2027-08-31,2027-09-08,2027-09-15,2027-09-23,2027-09-30,2027-10-08,2027-10-15,2027-10-23,2027-10-29,2027-11-06,2027-11-13,2027-11-21,2027-11-28,2027-12-06,2027-12-13,2027-12-21,2027-12-27".split(","),WANPRA_L=20;
let SPECIAL_X=[];
const isoDay=t=>new Date(t+TZ).toISOString().slice(0,10);
function applySpecial(a){SPECIAL_X=(Array.isArray(a)?a:[]).filter(x=>x&&/^\d{4}-\d{2}-\d{2}$/.test(String(x.d||""))).map(x=>({d:String(x.d),n:String(x.n||"วันมงคล").replace(/[\u0000-\u001f<>]/g,"").slice(0,30),l:Math.max(0,Math.min(200,Math.trunc(+x.l||0)))})).slice(0,60);return SPECIAL_X}
function specialOf(d){const x=SPECIAL_X.find(s=>s.d===d);if(x)return x;return WANPRA.includes(d)?{d,n:"วันพระ",l:WANPRA_L}:null}
function specialNext(n){const t=isoDay(now()),all=[...SPECIAL_X.map(x=>x.d),...WANPRA].filter(d=>d>=t);return [...new Set(all)].sort().slice(0,n||5).map(specialOf)}
/* extra merit for the day's ritual: members and special days */
function altarBonus(){let mem=0,sp=null;if(isMem()){mem=MEM_ALTAR;S.leaves=(S.leaves||0)+mem}const x=specialOf(isoDay(now()));if(x&&x.l>0){sp={n:x.n,l:x.l};S.leaves=(S.leaves||0)+x.l}return{mem,sp}}
/* SHOP_RULES_END */

  return { get S() { return S; }, set S(v) { S = v; }, admin, fresh,norm,prune,regen,summary,powers,actShake,actDecide,actUseSlip,actBurnSlip,actBurnMany,actTicket,applyRates,cleanRates,actJar,actExchange,actBuddy,actDaily,actLeafBuy,actTut,actAltar,actMus,actShop,applySpecial,specialNext,giveDecor,decS,isMem,memTick,FIRST_PACK,actShowcase,collScore,showcaseOut,actProfile,avatarOut,DEFAULT_PACKS,now };
}


const SB_URL = Deno.env.get("SUPABASE_URL");
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const sb = createClient(SB_URL, SB_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
/* SMS (ThaiBulkSMS). Keys live in Supabase secrets, never in code */
const TBS_KEY = Deno.env.get("TBS_KEY") || "", TBS_SECRET = Deno.env.get("TBS_SECRET") || "", TBS_SENDER = Deno.env.get("TBS_SENDER") || "", TBS_FORCE = Deno.env.get("TBS_FORCE") || "standard";
const OTP_TTL = 5 * 60e3, OTP_GAP = 60e3, OTP_PER_HOUR = 5, OTP_DAY_CAP = +(Deno.env.get("OTP_DAY_CAP") || 300), OTP_TRIES = 5;
async function sha(s) { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join(""); }
function pin6() { const a = new Uint32Array(1); crypto.getRandomValues(a); return String(a[0] % 1000000).padStart(6, "0"); }
async function sendSms(phone, message) {
  if (!TBS_KEY || !TBS_SECRET) throw "ระบบ SMS ยังไม่พร้อม ทักแอดมินที่ LINE @fortuniehoro นะคะ";
  const body = new URLSearchParams({ msisdn: phone, message, force: TBS_FORCE }); if (TBS_SENDER) body.set("sender", TBS_SENDER);
  let r, j;
  try { r = await fetch("https://api-v2.thaibulksms.com/sms", { method: "POST", headers: { Authorization: "Basic " + btoa(TBS_KEY + ":" + TBS_SECRET), "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" }, body }); j = await r.json().catch(() => ({})); }
  catch (e) { throw "ส่ง SMS ไม่สำเร็จ ลองใหม่อีกครั้ง"; }
  if (!r.ok || j.error) { console.error("sms", r.status, JSON.stringify(j).slice(0, 300)); throw "ส่ง SMS ไม่สำเร็จ ลองใหม่อีกครั้ง"; }
  return j;
}
/* step 1 of sign-up: text a 6-digit code; limited per number and per day so nobody can drain the credit */
async function otpSend(p) {
  const cfg = await getConfig(); if (!cfg.sms_verify) return fail("ตอนนี้ยังไม่ต้องยืนยันเบอร์ สมัครได้เลยค่ะ");
  const phone = normPhone(p.phone); if (!phone) return fail("เบอร์โทรไม่ถูกต้อง ใส่เบอร์มือถือ 10 หลัก เช่น 0812345678");
  const { data: dp } = await sb.from("profiles").select("id").eq("phone", phone).maybeSingle(); if (dp) return fail("เบอร์นี้สมัครไว้แล้ว ลองเข้าสู่ระบบ หรือทักแอดมินถ้าลืมรหัส");
  const now = Date.now(), day = new Date(now + 7 * 3600e3).toISOString().slice(0, 10);
  const { data: row } = await sb.from("otp_codes").select("*").eq("phone", phone).maybeSingle();
  if (row && now - Date.parse(row.last_sent) < OTP_GAP) return fail(`รอสักครู่ ส่งรหัสใหม่ได้อีก ${Math.ceil((OTP_GAP - (now - Date.parse(row.last_sent))) / 1000)} วินาที`);
  const inHour = row && now - Date.parse(row.window_start) < 3600e3 ? row.sent_in_window : 0;
  if (inHour >= OTP_PER_HOUR) return fail("ขอรหัสเบอร์นี้บ่อยเกินไป ลองใหม่อีกครั้งในอีก 1 ชั่วโมงนะคะ");
  const { count } = await sb.from("events").select("id", { count: "exact", head: true }).eq("kind", "otp_send").gte("at", day + "T00:00:00+07:00");
  if ((count || 0) >= OTP_DAY_CAP) return fail("วันนี้มีคนสมัครเยอะมาก ระบบส่ง SMS เต็มแล้ว ลองพรุ่งนี้หรือทักแอดมินนะคะ");
  const code = pin6();
  await sendSms(phone, `รหัสยืนยัน Fortunie ของคุณคือ ${code} ใช้ได้ 5 นาที ห้ามบอกใคร`);
  await sb.from("otp_codes").upsert({ phone, code_hash: await sha(phone + ":" + code + ":" + SB_KEY.slice(-12)), expires_at: new Date(now + OTP_TTL).toISOString(), tries: 0, last_sent: new Date(now).toISOString(), window_start: inHour ? row.window_start : new Date(now).toISOString(), sent_in_window: inHour + 1 });
  await sb.from("events").insert({ user_id: null, kind: "otp_send", data: { tail: phone.slice(-3) } });
  return out({ ok: true, res: { ttl: OTP_TTL / 1000, gap: OTP_GAP / 1000 } });
}
async function otpCheck(phone, code) {
  const { data: row } = await sb.from("otp_codes").select("*").eq("phone", phone).maybeSingle();
  if (!row) return "กดส่งรหัสยืนยันไปที่เบอร์ก่อนนะคะ";
  if (Date.parse(row.expires_at) < Date.now()) return "รหัสหมดอายุแล้ว กดส่งรหัสใหม่ได้เลย";
  if (row.tries >= OTP_TRIES) return "กรอกรหัสผิดหลายครั้ง กดส่งรหัสใหม่นะคะ";
  if (row.code_hash !== await sha(phone + ":" + String(code || "").trim() + ":" + SB_KEY.slice(-12))) { await sb.from("otp_codes").update({ tries: row.tries + 1 }).eq("phone", phone); return "รหัสยืนยันไม่ถูกต้อง"; }
  return "";
}
const EMAIL_DOMAIN = "players.fortunie.app";
const LOGIN_RE = /^[a-z0-9_]{3,16}$/;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i;
/* Thai mobile: keep as 0XXXXXXXXX; accepts +66 / 66 / spaces / dashes */
function normPhone(v) { let d = String(v || "").replace(/[^0-9]/g, ""); if (d.startsWith("66")) d = "0" + d.slice(2); return /^0[0-9]{8,9}$/.test(d) ? d : ""; }
const authEmailOf = pr => pr.auth_email || `${pr.login}@${EMAIL_DOMAIN}`;
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const TEST_CODES = { "TEST-TICKET": { t: 1 }, "TEST-STAR50": { s: 50 } };

function rnd() { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; }
const BASE = Game(null, 0, false);
const fresh = BASE.fresh, DEFAULT_PACKS = BASE.DEFAULT_PACKS;
const out = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
const fail = (msg, status = 400) => out({ error: String(msg) }, status);
const cleanName = v => String(v || "").replace(/[\u0000-\u001f<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 16);
const int = (v, lo, hi) => { const n = Math.trunc(Number(v) || 0); return Math.max(lo, Math.min(hi, n)); };

let CFG_C = null, CFG_AT = 0;
const TUT_FROM = Date.parse("2026-10-19T17:40:00Z"); /* accounts created from 00:40 Bangkok time, 20 Oct 2026 */
async function getConfig() { if (CFG_C && Date.now() - CFG_AT < 10000) return CFG_C; CFG_C = await getConfigRaw(); CFG_AT = Date.now(); return CFG_C; }
async function getConfigRaw() { const { data } = await sb.from("config").select("pay,ann,maint,packs,signup_approval,sms_verify,rates,slip_auto,slip_name,slip_tail,slip_hours,pay_bank,pay_no,pixel_id").eq("id", 1).single(); const c = data || { pay: "", ann: "", maint: false, packs: DEFAULT_PACKS, signup_approval: false, sms_verify: false };
  try { const { data: sp, error } = await sb.from("config").select("special").eq("id", 1).single(); c.special = !error && sp && Array.isArray(sp.special) ? sp.special : []; } catch (_e) { c.special = []; }
  return c; }
async function loadState(uid) {
  const { data } = await sb.from("player_state").select("state,ver").eq("id", uid).maybeSingle();
  return data ? { st: Object.assign(fresh(), data.state), ver: data.ver } : { st: fresh(), ver: -1 };
}
async function saveState(uid, st, ver) {
  if (ver < 0) { const { error } = await sb.from("player_state").insert({ id: uid, state: st, ver: 0 }); if (error) throw "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง"; return 0; }
  const { data, error } = await sb.from("player_state").update({ state: st, ver: ver + 1, updated_at: new Date().toISOString() }).eq("id", uid).eq("ver", ver).select("ver");
  if (error || !data || !data.length) throw "มีการเล่นจากอีกหน้าพร้อมกัน ลองใหม่อีกครั้ง";
  return ver + 1;
}
const log = (user_id, kind, data, actor) => sb.from("events").insert({ user_id, kind, data, actor: actor || user_id });
async function genCode() { for (let i = 0; i < 20; i++) { const c = "FTN-" + (1000 + Math.floor(rnd() * 9000)); const { data } = await sb.from("profiles").select("id").eq("code", c).maybeSingle(); if (!data) return c; } return "FTN-" + Date.now().toString().slice(-6); }

/* run a mutation against another player's state (admin actions) */
async function withPlayer(uid, fn) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const { st, ver } = await loadState(uid); const G = Game(st, Date.now(), false); G.norm();
    fn(G);
    try { await saveState(uid, G.S, ver); return; } catch (e) { if (attempt === 2) throw e; }
  }
}
const inbox = (G, msg) => { G.S.inbox.push({ at: Date.now(), msg }); if (G.S.inbox.length > 20) G.S.inbox.splice(0, G.S.inbox.length - 20); };

/* invite a friend: both get merit when the friend finishes the tutorial; at most REF_CAP rewards a day for one inviter */
const REF_GIFT = 50, REF_CAP = 5;
async function creditRef(by, uid, name) {
  let paid = false;
  try { await withPlayer(by, G => { const d = bkkDay(Date.now()); if (G.S.refDay !== d) { G.S.refDay = d; G.S.refDayN = 0; } G.S.refN = (G.S.refN || 0) + 1;
    if ((G.S.refDayN || 0) < REF_CAP) { G.S.refDayN = (G.S.refDayN || 0) + 1; G.S.leaves = (G.S.leaves || 0) + REF_GIFT; paid = true; inbox(G, `เพื่อนที่คุณชวน (${cleanName(name) || "เพื่อนใหม่"}) เล่นจบบทเรียนแล้ว 🎉 +${REF_GIFT} แต้มบุญ`); }
    else inbox(G, `เพื่อนที่คุณชวน (${cleanName(name) || "เพื่อนใหม่"}) เล่นจบบทเรียนแล้ว 🎉 (วันนี้รับรางวัลชวนเพื่อนครบ ${REF_CAP} ครั้งแล้ว)`); }); } catch (_e) {}
  await log(uid, "ref_ok", { by, paid });
}
/* ---------- measuring: where players come from, what they do on the first visit, which days they come back ---------- */
const cleanSrc = v => String(v || "").toLowerCase().replace(/[^a-z0-9_./-]/g, "").slice(0, 60) || "direct";
const bkkDay = t => new Date(new Date(t).getTime() + 7 * 3600e3).toISOString().slice(0, 10);
const TRACK_KINDS = new Set(["land", "demo", "line"]), TRACK_SEEN = new Map();
/* visitors who are not signed in: a landing view or a free demo shake. One per address and kind every 10 minutes, so nobody can flood the table */
async function track(req, p) {
  const kind = String(p.kind || ""); if (!TRACK_KINDS.has(kind)) return fail("bad kind");
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "?", key = ip + "|" + kind, t = Date.now();
  if (TRACK_SEEN.size > 20000) TRACK_SEEN.clear();
  if (t - (TRACK_SEEN.get(key) || 0) < 600e3) return out({ ok: true });
  TRACK_SEEN.set(key, t);
  await sb.from("events").insert({ user_id: null, kind, data: { src: cleanSrc(p.src) } });
  return out({ ok: true });
}
/* read every row of a query, 1000 at a time */
async function allRows(make) { const outRows = []; for (let i = 0; i < 50; i++) { const { data, error } = await make().range(i * 1000, i * 1000 + 999); if (error) throw "อ่านข้อมูลไม่สำเร็จ"; outRows.push(...(data || [])); if (!data || data.length < 1000) break; } return outRows; }
/* owner stats: one row per sign-up day for the last N days */
async function adminStats(days) {
  days = Math.max(7, Math.min(60, Math.trunc(+days || 30)));
  const today = bkkDay(Date.now()), since = new Date(Date.parse(today + "T00:00:00+07:00") - (days - 1) * 864e5).toISOString();
  const [anon, profs, sus] = await Promise.all([
    allRows(() => sb.from("events").select("kind,at,data").in("kind", ["land", "demo", "line"]).gte("at", since).order("at")),
    allRows(() => sb.from("profiles").select("id,created_at,is_admin,staff").gte("created_at", since).order("created_at")),
    allRows(() => sb.from("events").select("user_id,data").eq("kind", "signup").gte("at", since).order("at")),
  ]);
  const players = profs.filter(x => !x.is_admin && !x.staff), ids = players.map(x => x.id), idSet = new Set(ids);
  const chunks = []; for (let i = 0; i < ids.length; i += 200) chunks.push(ids.slice(i, i + 200));
  const states = [], act = [], pays = [];
  for (const c of chunks) {
    const [st, ev, tp] = await Promise.all([
      allRows(() => sb.from("player_state").select("id,state").in("id", c).order("id")),
      allRows(() => sb.from("events").select("user_id,at").eq("kind", "day").in("user_id", c).order("at")),
      allRows(() => sb.from("topups").select("user_id,baht,created_at").eq("status", "approved").in("user_id", c).order("created_at")),
    ]);
    states.push(...st); act.push(...ev); pays.push(...tp);
  }
  const srcOf = {}; for (const e of sus) if (idSet.has(e.user_id)) srcOf[e.user_id] = cleanSrc(e.data && e.data.src);
  const tutOf = {}; for (const r of states) { const S = r.state || {}; tutOf[r.id] = { done: S.tutS === 99, shakes: +S.shakes || 0 }; }
  const dnum = d => Math.round(Date.parse(d + "T00:00:00Z") / 864e5);
  const seen = {}; for (const e of act) (seen[e.user_id] = seen[e.user_id] || new Set()).add(dnum(bkkDay(e.at)));
  const paid = {}; for (const t of pays) { const x = paid[t.user_id] = paid[t.user_id] || { baht: 0 }; x.baht += +t.baht || 0; }
  const row = d => ({ d, land: 0, demo: 0, line: 0, signup: 0, tut: 0, d1: 0, d7: 0, d1n: 0, d7n: 0, pay: 0, baht: 0 });
  const byDay = {}; for (let i = 0; i < days; i++) { const d = bkkDay(Date.parse(today + "T12:00:00+07:00") - i * 864e5); byDay[d] = row(d); }
  for (const e of anon) { const r = byDay[bkkDay(e.at)]; if (r) r[e.kind]++; }
  const tday = dnum(today), bySrc = {};
  for (const p of players) {
    const d = bkkDay(p.created_at), r = byDay[d]; if (!r) continue; const n = dnum(d), s = seen[p.id] || new Set(), src = srcOf[p.id] || "direct";
    const b = bySrc[src] = bySrc[src] || { src, signup: 0, tut: 0, pay: 0, baht: 0 };
    r.signup++; b.signup++;
    if (tutOf[p.id] && tutOf[p.id].done) { r.tut++; b.tut++; }
    if (tday >= n + 1) { r.d1n++; if (s.has(n + 1)) r.d1++; }
    if (tday >= n + 7) { r.d7n++; if ([...s].some(x => x >= n + 7)) r.d7++; }
    if (paid[p.id]) { r.pay++; r.baht += paid[p.id].baht; b.pay++; b.baht += paid[p.id].baht; }
  }
  return { days, today, rows: Object.values(byDay), bySrc: Object.values(bySrc).sort((x, y) => y.signup - x.signup) };
}

/* sign up with email + phone; the login id is made from the player code so nobody has to invent one */
async function signUp(p) {
  const email = String(p.email || "").trim().toLowerCase(), phone = normPhone(p.phone), pass = String(p.password || "");
  if (!EMAIL_RE.test(email) || email.length > 200) return fail("อีเมลไม่ถูกต้อง ลองเช็กอีกครั้ง");
  if (!phone) return fail("เบอร์โทรไม่ถูกต้อง ใส่เบอร์มือถือ 10 หลัก เช่น 0812345678");
  if (pass.length < 6 || pass.length > 72) return fail("รหัสผ่านต้องยาว 6 ตัวขึ้นไป");
  const { data: de } = await sb.from("profiles").select("id").eq("email", email).maybeSingle(); if (de) return fail("อีเมลนี้สมัครไว้แล้ว ลองเข้าสู่ระบบ หรือทักแอดมินถ้าลืมรหัส");
  const { data: dp } = await sb.from("profiles").select("id").eq("phone", phone).maybeSingle(); if (dp) return fail("เบอร์นี้สมัครไว้แล้ว ลองเข้าสู่ระบบ หรือทักแอดมินถ้าลืมรหัส");
  const cfg = await getConfig();
  if (cfg.sms_verify) { const bad = await otpCheck(phone, p.otp); if (bad) return fail(bad); }
  const code = await genCode(), login = code.toLowerCase().replace(/[^a-z0-9]/g, ""), name = cleanName(p.name) || ("ผู้เล่น " + code.slice(-4));
  const approved = !cfg.signup_approval;
  const { data, error } = await sb.auth.admin.createUser({ email: `${login}@${EMAIL_DOMAIN}`, password: pass, email_confirm: true, user_metadata: { login } });
  if (error || !data.user) return fail(error && /already/i.test(error.message) ? "ไอดีนี้มีคนใช้แล้ว ลองไอดีอื่นนะคะ" : "สมัครไม่สำเร็จ ลองใหม่อีกครั้ง");
  const uid = data.user.id;
  const { error: e2 } = await sb.from("profiles").insert({ id: uid, login, name, code, email, phone, approved, auth_email: `${login}@${EMAIL_DOMAIN}` });
  if (e2) { await sb.auth.admin.deleteUser(uid); return fail("สมัครไม่สำเร็จ ลองใหม่อีกครั้ง"); }
  /* invited by a friend: remember who, the reward comes when this player finishes the tutorial */
  let refBy = ""; const refCode = String(p.ref || "").trim().toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, 16);
  if (refCode && refCode !== code) { const { data: rp } = await sb.from("profiles").select("id,banned").eq("code", refCode).maybeSingle(); if (rp && !rp.banned) refBy = rp.id; }
  const st0 = fresh(); if (refBy) st0.refBy = refBy;
  await sb.from("player_state").insert({ id: uid, state: st0, ver: 0 });
  if (cfg.sms_verify) await sb.from("otp_codes").delete().eq("phone", phone);
  await log(uid, "signup", { login, pending: !approved, sms: !!cfg.sms_verify, src: cleanSrc(p.src), ...(refBy ? { ref: refCode } : {}) });
  return out({ ok: true, res: { email: `${login}@${EMAIL_DOMAIN}`, pending: !approved } });
}
/* turn what the player typed (email / phone / old id) into the sign-in address; unknown ids get a look-alike so nobody can probe who has an account */
async function leaderboard(uid, me) {
  const base = () => sb.from("profiles").select("id,name,code,score,showcase,score_at,avatar,avatar_l,frame").eq("banned", false).neq("approved", false);
  const { data: top } = await base().order("score", { ascending: false }).order("score_at", { ascending: true }).limit(50);
  const { count } = await sb.from("profiles").select("id", { count: "exact", head: true }).eq("banned", false).neq("approved", false).gt("score", me.score || 0);
  return { top: (top || []).map(r => ({ name: r.name, code: r.code, score: r.score || 0, showcase: r.showcase || [], avatar: r.avatar ?? -1, avL: r.avatar_l ?? 1, frame: r.frame || "none", me: r.id === uid })), myRank: (count || 0) + 1, myScore: me.score || 0 };
}
/* ป๊อปสัตว์มงคล: the client sends taps every ~6 s; the server allows 20 taps a second since the last batch (counting at most 8 s), so a big burst can't be sent in one go */
async function addPops(uid, prof, n) {
  n = int(n, 0, 600); const now = Date.now(), last = prof.pop_at ? new Date(prof.pop_at).getTime() : 0;
  const el = last ? Math.min(8, Math.max(0, (now - last) / 1000)) : 8, take = Math.min(n, Math.ceil(el * 20) + 10), pops = (+prof.pops || 0) + take;
  if (take > 0) await sb.from("profiles").update({ pops, pop_at: new Date(now).toISOString() }).eq("id", uid);
  return { pops, taken: take };
}
async function popBoard(uid, me) {
  const { data: top } = await sb.from("profiles").select("id,name,code,pops,showcase,avatar,avatar_l,frame,pop_at").eq("banned", false).neq("approved", false).gt("pops", 0).order("pops", { ascending: false }).order("pop_at", { ascending: true }).limit(50);
  const { count } = await sb.from("profiles").select("id", { count: "exact", head: true }).eq("banned", false).neq("approved", false).gt("pops", +me.pops || 0);
  return { top: (top || []).map(r => ({ name: r.name, code: r.code, score: +r.pops || 0, showcase: r.showcase || [], avatar: r.avatar ?? -1, avL: r.avatar_l ?? 1, frame: r.frame || "none", me: r.id === uid })), myRank: (count || 0) + 1, myScore: +me.pops || 0 };
}
async function profileOf(code) {
  const { data } = await sb.from("profiles").select("name,code,score,pops,showcase,created_at,avatar,avatar_l,frame").eq("code", code.toUpperCase()).eq("banned", false).maybeSingle();
  if (!data) throw "ไม่พบผู้เล่นนี้";
  return { name: data.name, code: data.code, score: data.score || 0, showcase: data.showcase || [], since: data.created_at, pops: +data.pops || 0, avatar: data.avatar ?? -1, avL: data.avatar_l ?? 1, frame: data.frame || "none" };
}
async function resolveId(p) {
  const raw = String(p.id || "").trim().toLowerCase(); if (!raw) return fail("ใส่อีเมลหรือเบอร์โทรก่อนนะคะ");
  let q = null;
  if (raw.includes("@")) q = sb.from("profiles").select("login,auth_email").eq("email", raw);
  else if (normPhone(raw) && /^[0-9+\-\s]+$/.test(raw)) q = sb.from("profiles").select("login,auth_email").eq("phone", normPhone(raw));
  else if (LOGIN_RE.test(raw)) q = sb.from("profiles").select("login,auth_email").eq("login", raw);
  const { data } = q ? await q.maybeSingle() : { data: null };
  if (data) return out({ res: { email: authEmailOf(data) } });
  let h = 0; for (const ch of raw) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return out({ res: { email: `ftn${1000 + h % 9000}x@${EMAIL_DOMAIN}` } });
}

async function adminList() {
  const [{ data: profs }, { data: states }, { data: pend }, { data: hist }, { data: codes }] = await Promise.all([
    sb.from("profiles").select("id,login,name,code,is_admin,staff,banned,ban_reason,created_at,last_seen,email,phone,approved").order("last_seen", { ascending: false }).limit(500),
    sb.from("player_state").select("id,state").limit(500),
    sb.from("topups").select("*").eq("status", "pending").order("created_at").limit(100),
    sb.from("topups").select("*").neq("status", "pending").order("done_at", { ascending: false }).limit(30),
    sb.from("codes").select("*").order("created_at", { ascending: false }).limit(200),
  ]);
  const { data: reds } = await sb.from("redemptions").select("code").limit(20000);
  const used = {}; for (const r of reds || []) used[r.code] = (used[r.code] || 0) + 1;
  for (const c of codes || []) c.used = used[c.code] || 0;
  const sum = {}; for (const r of states || []) { const G = Game(Object.assign(fresh(), r.state), Date.now(), false); G.norm(); sum[r.id] = G.summary(); }
  const sign = async (rows) => Promise.all((rows || []).map(async r => { let url = ""; if (r.slip_path) { const { data } = await sb.storage.from("slips").createSignedUrl(r.slip_path, 3600); url = data ? data.signedUrl : ""; } return { ...r, slip_url: url }; }));
  return { players: (profs || []).map(p => ({ ...p, ...(sum[p.id] || {}) })), pending: await sign(pend), history: await sign(hist), codes: codes || [] };
}

/* staff can review slips and sign-ups and look at players; everything else is owner only */
const STAFF_OK = new Set(["adm_list", "adm_topup", "adm_approve", "adm_timeline"]);
async function adminAction(a, p, me, role) {
  const uid = p.uid;
  const prof = async () => { const { data } = await sb.from("profiles").select("*").eq("id", uid).single(); if (!data) throw "ไม่พบผู้เล่น"; return data; };
  if (a === "adm_list") return await adminList();
  if (a === "adm_stats") return await adminStats(p.days);
  if (a === "adm_topup") {
    const { data: t } = await sb.from("topups").select("*").eq("id", p.id).single(); if (!t || t.status !== "pending") throw "คำขอนี้ถูกจัดการไปแล้ว";
    if (p.ok && p.baht != null) { const b = int(p.baht, 0, 100000); if (b < 1) throw "ใส่ยอดเงินในสลิปก่อน"; const c = await getConfig(); const packs = Array.isArray(c.packs) && c.packs.length ? c.packs : DEFAULT_PACKS;
      const ps = packs.filter(x => x.baht > 0 && x.stars > 0).sort((a, z) => a.baht - z.baht); t.baht = b; t.stars = b >= TOPUP_MIN ? starsFor(packs, b) : (ps.length ? Math.floor(b * ps[0].stars / ps[0].baht) : 0);
      await sb.from("topups").update({ baht: t.baht, stars: t.stars }).eq("id", t.id).eq("status", "pending"); }
    const { data: upd } = await sb.from("topups").update({ status: p.ok ? "approved" : "rejected", reason: p.ok ? "" : String(p.reason || "").slice(0, 80), done_at: new Date().toISOString() }).eq("id", t.id).eq("status", "pending").select("id");
    if (!upd || !upd.length) throw "คำขอนี้ถูกจัดการไปแล้ว";
    if (p.ok) { let got = t.stars; await withPlayer(t.user_id, G => { got = grantTopup(G, t.baht, t.stars); }); if (got !== t.stars) { t.stars = got; await sb.from("topups").update({ stars: got }).eq("id", t.id); } }
    else await withPlayer(t.user_id, G => inbox(G, `คำขอเติม ${t.baht} บาทไม่ผ่าน${p.reason ? " · " + String(p.reason).slice(0, 80) : ""}`));
    await log(t.user_id, p.ok ? "topup_ok" : "topup_no", { id: t.id, baht: t.baht, stars: t.stars }, me);
    return { ok: true };
  }
  if (a === "adm_give") {
    await prof(); const s = int(p.s, -99999, 99999), l = int(p.l, -99999, 99999), t = int(p.t, -99, 99), rt = int(p.rt, -99, 99), note = String(p.note || "").slice(0, 60);
    await withPlayer(uid, G => { G.S.stars = Math.max(0, G.S.stars + s); G.S.leaves = Math.max(0, (G.S.leaves || 0) + l); G.S.tickets = Math.max(0, G.S.tickets + t); G.S.rtickets = Math.max(0, (G.S.rtickets || 0) + rt); inbox(G, `แอดมิน${s < 0 || l < 0 || t < 0 || rt < 0 ? "ปรับ" : "ส่ง"}ของให้${s ? " " + (s > 0 ? "+" : "") + s + " เหรียญทอง" : ""}${l ? " " + (l > 0 ? "+" : "") + l + " แต้มบุญ" : ""}${t ? " เซียมเรียก " + (t > 0 ? "+" : "") + t : ""}${rt ? " เซียมเรียกแรร์+ " + (rt > 0 ? "+" : "") + rt : ""}${note ? " · " + note : ""}`); });
    await log(uid, "give", { s, l, t, rt, note }, me); return { ok: true };
  }
  if (a === "adm_smstest") {
    const phone = normPhone(p.phone); if (!phone) throw "เบอร์โทรไม่ถูกต้อง";
    const j = await sendSms(phone, "ทดสอบระบบ SMS ของ Fortunie สำเร็จแล้ว");
    await log(me, "sms_test", { tail: phone.slice(-3) }, me);
    return { ok: true, credit: j.remaining_credit ?? null };
  }
  if (a === "adm_approve") {
    const pr = await prof(); if (p.ok) { await sb.from("profiles").update({ approved: true, banned: false, ban_reason: "" }).eq("id", uid); await withPlayer(uid, G => inbox(G, "ยินดีต้อนรับ! แอดมินอนุมัติบัญชีแล้ว เริ่มเขย่าได้เลย")); }
    else await sb.from("profiles").update({ approved: false, banned: true, ban_reason: String(p.reason || "ไม่ผ่านการอนุมัติ").slice(0, 80) }).eq("id", uid);
    await log(uid, p.ok ? "approve" : "deny", { login: pr.login }, me); return { ok: true };
  }
  if (a === "adm_ban") { if (p.ban && !String(p.reason || "").trim()) throw "ใส่เหตุผลก่อนระงับบัญชี"; await prof(); await sb.from("profiles").update({ banned: !!p.ban, ban_reason: String(p.reason || "").slice(0, 80) }).eq("id", uid); await log(uid, p.ban ? "ban" : "unban", { reason: p.reason }, me); return { ok: true }; }
  if (a === "adm_rename") { const pr = await prof(); const name = cleanName(p.name); if (!name) throw "ชื่อว่างไม่ได้"; await sb.from("profiles").update({ name }).eq("id", uid); await log(uid, "rename", { from: pr.name, to: name }, me); return { ok: true }; }
  if (a === "adm_reset") { const pr = await prof(); await withPlayer(uid, G => { const keepIn = G.S.inbox; G.S = fresh(); G.S.inbox = keepIn; inbox(G, "แอดมินล้างข้อมูลเกมของคุณแล้ว"); }); await log(uid, "reset", { login: pr.login }, me); return { ok: true }; }
  if (a === "adm_pass") { await prof(); const pass = String(p.password || ""); if (pass.length < 6) throw "รหัสผ่านต้องยาว 6 ตัวขึ้นไป"; const { error } = await sb.auth.admin.updateUserById(uid, { password: pass }); if (error) throw "ตั้งรหัสใหม่ไม่สำเร็จ"; await log(uid, "setpass", {}, me); return { ok: true }; }
  if (a === "adm_admin") { await prof(); if (uid === me) throw "ปลดสิทธิ์ตัวเองไม่ได้"; await sb.from("profiles").update({ is_admin: !!p.on }).eq("id", uid); await log(uid, "admin", { on: !!p.on }, me); return { ok: true }; }
  if (a === "adm_cfg") {
    const packs = (Array.isArray(p.packs) ? p.packs : []).map(x => ({ baht: int(x.baht, 0, 100000), stars: int(x.stars, 0, 1000000), tag: String(x.tag || "").slice(0, 20) })).filter(x => x.baht > 0 && x.stars > 0).slice(0, 8);
    if (!packs.length) throw "ต้องมีแพ็กอย่างน้อย 1 แพ็ก";
    const okSum = a => Array.isArray(a) && a.length === 5 && Math.abs(a.reduce((x, y) => x + (+y || 0), 0) - 100) < 0.05;
    if (p.rates && (!okSum(p.rates.n) || !okSum(p.rates.r) || +p.rates.r[0] || +p.rates.r[1])) throw "เรทสุ่มต้องรวมได้ 100% ทั้งสองแบบ";
    const rates = p.rates ? Game(fresh(), Date.now(), false).applyRates(p.rates) : undefined;
    CFG_C = null; { const old = await getConfig(); const diff = [];
      const j = x => JSON.stringify(x || null); if (rates && j(rates) !== j(old.rates)) diff.push("rates"); if (j(packs) !== j(old.packs)) diff.push("packs"); if (String(p.ann || "") !== (old.ann || "")) diff.push("ann"); if (!!p.maint !== !!old.maint) diff.push("maint");
      if (diff.length) await log(me, "cfg", { diff, rates: rates || old.rates || null, old_rates: old.rates || null, packs, ann: String(p.ann || "").slice(0, 120), maint: !!p.maint }, me); }
    await sb.from("config").update({ pay: String(p.pay || "").slice(0, 300), ann: String(p.ann || "").slice(0, 120), maint: !!p.maint, signup_approval: !!p.approval, sms_verify: !!p.sms, slip_auto: !!p.slipAuto, slip_name: String(p.slipName || "").slice(0, 80), slip_tail: String(p.slipTail || "").replace(/\D/g, "").slice(-6), pay_bank: String(p.payBank || "").slice(0, 40), pay_no: String(p.payNo || "").replace(/[^\d-]/g, "").slice(0, 24), slip_hours: int(p.slipHours || 24, 1, 168), ...(p.pixel !== undefined ? { pixel_id: String(p.pixel || "").replace(/\D/g, "").slice(0, 20) } : {}), packs, ...(rates ? { rates } : {}), updated_at: new Date().toISOString() }).eq("id", 1);
    CFG_C = null;
    if (Array.isArray(p.special)) { const clean = Game(fresh(), Date.now(), false).applySpecial(p.special); const { error: se } = await sb.from("config").update({ special: clean }).eq("id", 1); CFG_C = null; if (se) throw "บันทึกการตั้งค่าอื่นแล้ว แต่บันทึกวันพิเศษไม่สำเร็จ (ฐานข้อมูลยังไม่มีช่อง special)"; }
    return { ok: true };
  }
  if (a === "adm_code") {
    const code = String(p.code || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24); if (!code) throw "ใส่โค้ดก่อน";
    if (p.toggle) { await sb.from("codes").update({ off: !!p.off }).eq("code", code); await log(me, p.off ? "code_off" : "code_on", { code }, me); return { ok: true }; }
    const s = int(p.s, 0, 99999), l = int(p.l, 0, 99999), t = int(p.t, 0, 99), rt = int(p.rt, 0, 99); if (!s && !l && !t && !rt) throw "ใส่เหรียญทอง แต้มบุญ หรือเซียมเรียกอย่างน้อย 1 อย่าง";
    const kind = p.kind === "once" ? "once" : "each", max_uses = kind === "once" ? 1 : int(p.max, 0, 100000), days = int(p.days, 0, 365);
    const expires_at = days ? new Date(Date.now() + days * 864e5).toISOString() : null;
    const { error } = await sb.from("codes").upsert({ code, s, l, t, rt, note: String(p.note || "").slice(0, 60), off: false, kind, max_uses, expires_at }); if (error) throw "สร้างโค้ดไม่สำเร็จ";
    await log(me, "code_new", { code, s, l, t, rt, kind, max_uses, days }, me); return { ok: true, code };
  }
  if (a === "adm_timeline") {
    const [{ data: ev }, { data: tops }] = await Promise.all([sb.from("events").select("kind,data,at,actor").eq("user_id", uid).order("at", { ascending: false }).limit(60), sb.from("topups").select("baht,stars,status,reason,created_at,done_at").eq("user_id", uid).order("created_at", { ascending: false }).limit(20)]);
    return { events: ev || [], topups: tops || [] };
  }
  if (a === "adm_logs") {
    const { data: ev } = await sb.from("events").select("user_id,actor,kind,data,at").order("at", { ascending: false }).limit(400);
    return { events: (ev || []).filter(e => ADMIN_KINDS.has(e.kind)) };
  }
  if (a === "adm_staff") { const pr = await prof(); if (uid === me) throw "เปลี่ยนสิทธิ์ตัวเองไม่ได้"; if (pr.is_admin) throw "คนนี้เป็นแอดมินเจ้าของอยู่แล้ว"; await sb.from("profiles").update({ staff: !!p.on }).eq("id", uid); await log(uid, p.on ? "staff_on" : "staff_off", {}, me); return { ok: true }; }
  if (a === "adm_code_batch") {
    const pre = String(p.prefix || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10), n = int(p.count, 0, 500), s = int(p.s, 0, 99999), l = int(p.l, 0, 99999), t = int(p.t, 0, 99), rt = int(p.rt, 0, 99), days = int(p.days, 0, 365);
    if (!pre) throw "ใส่ตัวหน้าโค้ดก่อน"; if (!n) throw "ใส่จำนวนโค้ด 1–500"; if (!s && !l && !t && !rt) throw "ใส่เหรียญทอง แต้มบุญ หรือเซียมเรียกอย่างน้อย 1 อย่าง";
    const CH = "ABCDEFGHJKMNPQRSTUVWXYZ23456789", batch = "b" + Date.now(), expires_at = days ? new Date(Date.now() + days * 864e5).toISOString() : null, note = String(p.note || "").slice(0, 60), out = new Set();
    while (out.size < n) { let c = pre + "-"; for (let i = 0; i < 6; i++) c += CH[Math.floor(rnd() * CH.length)]; out.add(c); }
    const rows = [...out].map(code => ({ code, s, l, t, rt, note, off: false, kind: "once", max_uses: 1, expires_at, batch, prefix: pre }));
    for (let i = 0; i < rows.length; i += 100) { const { error } = await sb.from("codes").insert(rows.slice(i, i + 100)); if (error) throw "สร้างโค้ดไม่ครบ ลองใหม่อีกครั้ง"; }
    await log(me, "code_batch", { prefix: pre, n: rows.length, s, l, t, rt, days }, me); return { codes: rows.map(r => r.code) };
  }
  if (a === "adm_batch_off") { const b = String(p.batch || "").slice(0, 40); if (!b) throw "ไม่พบชุดโค้ด"; await sb.from("codes").update({ off: true }).eq("batch", b); await log(me, "batch_off", { batch: b }, me); return { ok: true }; }
  if (a === "adm_mass") {
    const s = int(p.s, 0, 99999), l = int(p.l, 0, 99999), t = int(p.t, 0, 99), rt = int(p.rt, 0, 99), note = String(p.note || "").slice(0, 60), seg = String(p.seg || "all");
    if (!s && !l && !t && !rt) throw "ใส่เหรียญทอง แต้มบุญ หรือเซียมเรียกที่จะแจก";
    const ids = await segmentIds(seg); if (p.preview) return { n: ids.length };
    let n = 0; for (const id of ids) { try { await withPlayer(id, G => { G.S.stars += s; G.S.leaves = (G.S.leaves || 0) + l; G.S.tickets += t; G.S.rtickets = (G.S.rtickets || 0) + rt; inbox(G, `แอดมินแจกของ${s ? " +" + s + " เหรียญทอง" : ""}${l ? " +" + l + " แต้มบุญ" : ""}${t ? " เซียมเรียก +" + t : ""}${rt ? " เซียมเรียกแรร์+ +" + rt : ""}${note ? " · " + note : ""}`); }); n++; } catch (e) {} }
    await log(me, "mass_give", { seg, n, s, l, t, rt, note }, me); return { n };
  }
  if (a === "adm_delslip") { const { data: t } = await sb.from("topups").select("slip_path").eq("id", p.id).single(); if (t && t.slip_path) await sb.storage.from("slips").remove([t.slip_path]); await sb.from("topups").update({ slip_path: null }).eq("id", p.id); return { ok: true }; }
  throw "คำสั่งไม่ถูกต้อง";
}

const ADMIN_KINDS = new Set(["topup_ok", "topup_no", "give", "approve", "deny", "ban", "unban", "reset", "setpass", "admin", "staff_on", "staff_off", "rename", "cfg", "code_new", "code_on", "code_off", "code_batch", "batch_off", "mass_give", "sms_test"]);
async function segmentIds(seg) {
  const { data: profs } = await sb.from("profiles").select("id,last_seen,banned,approved").limit(5000);
  let list = (profs || []).filter(p => !p.banned && p.approved !== false); const now = Date.now(), dayStart = (() => { const d = new Date(now + 7 * 3600e3); d.setUTCHours(0, 0, 0, 0); return d.getTime() - 7 * 3600e3; })();
  if (seg === "d7") list = list.filter(p => p.last_seen && new Date(p.last_seen).getTime() >= now - 7 * 864e5);
  if (seg === "today") list = list.filter(p => p.last_seen && new Date(p.last_seen).getTime() >= dayStart);
  if (seg === "paid") { const { data: tops } = await sb.from("topups").select("user_id").eq("status", "approved").limit(20000); const paid = new Set((tops || []).map(x => x.user_id)); list = list.filter(p => paid.has(p.id)); }
  return list.map(p => p.id);
}
/* ---------- automatic slip check (EasySlip API v2 by default) ----------
   The key lives only in the function's secrets (SLIP_KEY); SLIP_URL can point to another provider with the same shape.
   Anything unclear or failing goes to the normal admin queue instead of being rejected. */
const SLIP_KEY = Deno.env.get("SLIP_KEY") || "", SLIP_URL = Deno.env.get("SLIP_URL") || "https://api.easyslip.com/v2/verify/bank";
/* EasySlip API v2 (document.easyslip.com/en/v2/verify/bank/base64): { base64, checkDuplicate, matchAmount } → data.rawSlip */
async function verifySlip(b64) {
  if (!SLIP_KEY) return { err: "ยังไม่ได้ใส่คีย์ตรวจสลิป" };
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 9000);
  try {
    const r = await fetch(SLIP_URL, { method: "POST", headers: { Authorization: `Bearer ${SLIP_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ base64: b64 }), signal: ctl.signal });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j || j.success === false || !j.data) { const e = (j && j.error) || {}; const code = String(e.code || j.message || ("HTTP " + r.status));
      return { err: code === "SLIP_PENDING" ? "สลิปกรุงเทพยังไม่พร้อมตรวจ (โอนไม่ถึง 5 นาที)" : "ระบบตรวจตอบว่า " + String(e.message || code).slice(0, 60) }; }
    const d = j.data, raw = d.rawSlip || d, rc = raw.receiver || {}, acc = rc.account || {}, amt = raw.amount && typeof raw.amount === "object" ? raw.amount.amount : (raw.amount ?? d.amountInSlip);
    const names = [acc.name && acc.name.th, acc.name && acc.name.en, d.matchedAccount && d.matchedAccount.nameTh, d.matchedAccount && d.matchedAccount.nameEn].filter(Boolean);
    const accts = [acc.bank && acc.bank.account, acc.proxy && acc.proxy.account, d.matchedAccount && d.matchedAccount.bankNumber].filter(x => typeof x === "string");
    return { dup: !!d.isDuplicate, ref: String(raw.transRef || raw.reference || ""), amount: Number(amt), date: String(raw.date || ""), name: names.join(" | "), acct: accts.join(" | ") };
  } catch (_e) { return { err: "ระบบตรวจสลิปไม่ตอบ" }; } finally { clearTimeout(timer); }
}
const normName = s => String(s || "").toLowerCase().replace(/(นางสาว|นาง|นาย|น\.ส\.|บจก\.?|บริษัท|จำกัด|mr\.?|mrs\.?|ms\.?|miss|co\.?,?\s*ltd\.?|company|limited)/g, "").replace(/[^a-z0-9ก-๙]/g, "");
function slipProblem(v, cfg, now, minB) {
  if (v.err) return v.err;
  if (!v.ref) return "ไม่พบเลขอ้างอิงในสลิป";
  minB = minB || TOPUP_MIN;
  if (!isFinite(v.amount) || v.amount < minB) return `ยอดในสลิป ${isFinite(v.amount) ? v.amount : "?"} บาท ต่ำกว่าขั้นต่ำ ${minB} บาท`;
  const want = normName(cfg.slip_name), tail = String(cfg.slip_tail || "").replace(/\D/g, "");
  if (!want && !tail && !String(cfg.pay_no || "").replace(/\D/g, "")) return "ยังไม่ได้ตั้งบัญชีรับเงินในหน้าแอดมิน";
  const nameOk = !!want && v.name.split("|").some(n => { const g = normName(n); return g.length >= 3 && (g.includes(want) || want.includes(g)); });
  const full = String(cfg.pay_no || "").replace(/\D/g, ""), shown = v.acct.split("|").map(x => x.replace(/\D/g, "")).filter(x => x.length >= 3);
  const acctOk = (!!full && shown.some(x => full.includes(x))) || (!!tail && v.acct.replace(/\D/g, "").includes(tail));
  if (!nameOk && !acctOk) return "บัญชีผู้รับในสลิปไม่ตรงกับบัญชีร้าน";
  const t = Date.parse(v.date); if (!isFinite(t)) return "อ่านเวลาโอนในสลิปไม่ได้";
  const hrs = Math.max(1, Math.min(168, +cfg.slip_hours || 24));
  if (now - t > hrs * 3600e3) return `สลิปเก่ากว่า ${hrs} ชั่วโมง`;
  if (t - now > 10 * 60e3) return "เวลาในสลิปอยู่ในอนาคต";
  return "";
}
/* โอนกี่บาทได้กี่เหรียญทอง: the rate of the biggest pack the amount reaches; minimum TOPUP_MIN baht */
const TOPUP_MIN = 50;
function starsFor(packs, baht) { baht = Math.floor(+baht || 0); if (baht < TOPUP_MIN) return 0; const ps = packs.filter(x => x.baht > 0 && x.stars > 0).slice().sort((a, b) => a.baht - b.baht); if (!ps.length) return 0;
  let t = ps[0]; for (const x of ps) if (x.baht <= baht) t = x; return Math.floor(baht * t.stars / t.baht); }
/* the welcome pack: 19 baht once per account, only before the first top-up; contents are granted on approval */
const FIRST = BASE.FIRST_PACK;
function grantTopup(G, baht, stars) {
  if (baht === FIRST.baht && !G.S.fp && !(G.S.topBaht > 0)) {
    G.S.fp = 1; G.S.stars += FIRST.stars; G.S.rtickets = (G.S.rtickets || 0) + FIRST.rt; G.giveDecor(FIRST.decor); G.S.topBaht = (G.S.topBaht || 0) + baht;
    inbox(G, `แพ็กแรกสำเร็จ 🎁 +${FIRST.stars} เหรียญทอง · เซียมเรียกแรร์+ ${FIRST.rt} ใบ · เทียนบัวทองสำหรับหิ้ง`); return FIRST.stars;
  }
  if (baht < TOPUP_MIN) stars = Math.min(stars, baht); /* a small amount that is not the welcome pack: about 1 coin per baht */
  G.S.stars += stars; G.S.topBaht = (G.S.topBaht || 0) + baht; inbox(G, `เติม ${baht} บาทสำเร็จ +${stars} เหรียญทอง`); return stars;
}
async function submitTopup(uid, prof, p, cfg) {
  const packs = Array.isArray(cfg.packs) && cfg.packs.length ? cfg.packs : DEFAULT_PACKS;
  const first = !!p.first;
  if (first) { const { st } = await loadState(uid); if (st.fp || st.topBaht > 0) throw "แพ็กแรกซื้อได้ครั้งเดียว สำหรับบัญชีที่ยังไม่เคยเติมค่ะ";
    const { count: fc } = await sb.from("topups").select("id", { count: "exact", head: true }).eq("user_id", uid).eq("status", "pending").eq("baht", FIRST.baht); if ((fc || 0) > 0) throw "มีคำขอแพ็กแรกรอตรวจอยู่แล้วค่ะ"; }
  let pk = first ? { baht: FIRST.baht, stars: FIRST.stars } : p.any || p.baht != null ? null : packs[int(p.pack, 0, packs.length - 1)];
  if (!first && p.any) { const b = int(p.baht, 0, 100000), auto = !!(cfg.slip_auto && SLIP_KEY); if (b && b < TOPUP_MIN) throw `เติมขั้นต่ำ ${TOPUP_MIN} บาทนะคะ`; if (!b && !auto) throw `ใส่ยอดที่โอนก่อนนะคะ (ขั้นต่ำ ${TOPUP_MIN} บาท)`; pk = { baht: b, stars: starsFor(packs, b) }; }
  if (!pk) { const b = int(p.baht, 0, 100000); if (b < TOPUP_MIN) throw `เติมขั้นต่ำ ${TOPUP_MIN} บาทนะคะ`; pk = { baht: b, stars: starsFor(packs, b) }; }
  const m = /^data:(image\/(jpeg|png|webp));base64,(.+)$/.exec(String(p.img || "")); if (!m) throw "แนบรูปสลิปก่อนนะคะ";
  const bytes = Uint8Array.from(atob(m[3]), c => c.charCodeAt(0)); if (bytes.length > 4.5 * 1024 * 1024) throw "รูปใหญ่เกินไป";
  const { count } = await sb.from("topups").select("id", { count: "exact", head: true }).eq("user_id", uid).eq("status", "pending");
  if ((count || 0) >= 5) throw "มีคำขอรอตรวจอยู่หลายรายการแล้ว รอแอดมินตรวจก่อนนะคะ";
  const id = crypto.randomUUID(), path = `${uid}/${id}.${m[2] === "jpeg" ? "jpg" : m[2]}`;
  const { error } = await sb.storage.from("slips").upload(path, bytes, { contentType: m[1] }); if (error) throw "อัปโหลดสลิปไม่สำเร็จ";
  await sb.from("topups").insert({ id, user_id: uid, baht: pk.baht, stars: pk.stars, slip_path: path });
  await log(uid, "topup_req", { id, baht: pk.baht });
  if (!(cfg.slip_auto && SLIP_KEY)) return { ok: true, auto: false };
  const v = await verifySlip(m[3]); let why = slipProblem(v, cfg, Date.now(), first ? FIRST.baht : TOPUP_MIN);
  if (!why && first && Math.floor(v.amount) !== FIRST.baht && v.amount < TOPUP_MIN) why = `ยอดในสลิป ${Math.floor(v.amount)} บาท ไม่ตรงกับแพ็กแรก ${FIRST.baht} บาท`;
  if (!why) {
    const baht = Math.floor(v.amount), stars = first && baht === FIRST.baht ? FIRST.stars : starsFor(packs, baht), note = !pk.baht || baht === pk.baht ? (first && baht === FIRST.baht ? "ตรวจอัตโนมัติผ่าน · แพ็กแรก" : "ตรวจอัตโนมัติผ่าน") : `ตรวจอัตโนมัติผ่าน · ยอดจริง ${baht} บาท (เลือกไว้ ${pk.baht})`;
    pk = { baht, stars };
    const { data: upd, error: ue } = await sb.from("topups").update({ status: "approved", done_at: new Date().toISOString(), slip_ref: v.ref, auto: true, auto_note: note, baht, stars }).eq("id", id).eq("status", "pending").select("id");
    if (ue && String(ue.code) === "23505") why = "สลิปนี้เคยใช้เติมไปแล้ว";
    else if (ue || !upd || !upd.length) why = "บันทึกผลตรวจไม่สำเร็จ";
    else {
      { let got = pk.stars; await withPlayer(uid, G => { got = grantTopup(G, pk.baht, pk.stars); }); if (got !== pk.stars) { pk.stars = got; await sb.from("topups").update({ stars: got }).eq("id", id); } }
      await log(uid, "topup_ok", { id, baht: pk.baht, stars: pk.stars, auto: true, ref: v.ref });
      return { ok: true, auto: true, stars: pk.stars, baht: pk.baht };
    }
  }
  /* automatic mode: a slip that doesn't pass is turned down right away (no admin queue); service hiccups ask the player to send again */
  const fix = {}; if (!v.err && isFinite(v.amount) && v.amount > 0) { fix.baht = Math.floor(v.amount); fix.stars = starsFor(packs, fix.baht); }
  const reason = (v.err ? why + " ลองส่งสลิปใหม่อีกครั้งนะคะ" : why).slice(0, 120);
  await sb.from("topups").update({ status: "rejected", reason, auto: true, auto_note: reason, done_at: new Date().toISOString(), ...fix }).eq("id", id).eq("status", "pending");
  await log(uid, "topup_no", { id, baht: fix.baht || pk.baht, auto: true, reason });
  return { ok: true, auto: false, rejected: true, reason };
}

async function redeem(G, uid, code) {
  const S = G.S, ADMIN = G.admin;
  code = String(code || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24); if (!code) throw "ใส่โค้ดก่อนนะคะ";
  let c = null; const { data } = await sb.from("codes").select("*").eq("code", code).maybeSingle(); if (data && !data.off) c = data;
  if (!c && ADMIN && TEST_CODES[code]) { if ((S.redeemedTest || []).includes(code)) throw "โค้ดนี้ใช้ไปแล้ว"; S.redeemedTest = (S.redeemedTest || []).concat(code); c = TEST_CODES[code]; }
  else {
    if (!c) throw "โค้ดนี้ใช้ไม่ได้ ลองเช็กตัวสะกดอีกครั้ง";
    /* one database call checks expiry, one-time / max-user limits and records the use, so two people can't both win a one-time code */
    const { data: r, error } = await sb.rpc("redeem_code", { p_code: code, p_uid: uid }); if (error || !r) throw "รับโค้ดไม่สำเร็จ ลองใหม่อีกครั้ง";
    if (r.err) throw ({ bad: "โค้ดนี้ใช้ไม่ได้ ลองเช็กตัวสะกดอีกครั้ง", expired: "โค้ดนี้หมดอายุแล้ว", used: "โค้ดนี้ใช้ไปแล้ว", full: c.kind === "once" ? "โค้ดนี้มีคนใช้ไปแล้ว" : "โค้ดนี้ครบจำนวนคนแล้ว" })[r.err] || "โค้ดนี้ใช้ไม่ได้";
  }
  if (c.s) S.stars += +c.s; if (c.l) S.leaves = (S.leaves || 0) + (+c.l); if (c.t) S.tickets += +c.t; if (c.rt) S.rtickets = (S.rtickets || 0) + (+c.rt); await log(uid, "redeem", { code });
  return { s: +c.s || 0, l: +c.l || 0, t: +c.t || 0, rt: +c.rt || 0 };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  let p; try { p = await req.json(); } catch { return fail("bad request"); }
  const a = String(p.action || "");
  try {
    if (a === "signup") return await signUp(p);
    if (a === "config") { const c = await getConfig(); return out({ cfg: { ann: c.ann, maint: c.maint, approval: !!c.signup_approval, sms: !!c.sms_verify, pixel: c.pixel_id || "" } }); }
    if (a === "track") return await track(req, p);
    if (a === "otp_send") return await otpSend(p);
    if (a === "resolve") return await resolveId(p);
    const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    /* speed: read the user id hint from the token and start the database reads while the token is being verified.
       nothing fetched here is used unless the verified id matches */
    let hint = ""; try { const b = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"); hint = String(JSON.parse(atob(b + "===".slice((b.length + 3) % 4))).sub || ""); } catch (_) {}
    const TOPS = id => sb.from("topups").select("id,baht,stars,status,reason,created_at").eq("user_id", id).order("created_at", { ascending: false }).limit(8);
    const pre = hint ? { prof: Promise.resolve(sb.from("profiles").select("*").eq("id", hint).single()).catch(() => ({ data: null })), st: loadState(hint).catch(() => null), tops: Promise.resolve(TOPS(hint)).catch(() => ({ data: [] })) } : null;
    const cfgP = getConfig();
    const { data: ud, error: ue } = await sb.auth.getUser(token);
    if (ue || !ud || !ud.user) return fail("กรุณาเข้าสู่ระบบใหม่", 401);
    const uid = ud.user.id, usePre = !!pre && hint === uid;
    const { data: prof } = usePre ? await pre.prof : await sb.from("profiles").select("*").eq("id", uid).single();
    if (!prof) return fail("ไม่พบบัญชีผู้เล่น", 401);
    const ADMIN = !!prof.is_admin, STAFF = !ADMIN && !!prof.staff;
    const cfg = await cfgP;
    if (prof.banned && !ADMIN) return out({ locked: "ban", reason: prof.ban_reason, profile: { name: prof.name, code: prof.code } });
    if (cfg.maint && !ADMIN && !STAFF) return out({ locked: "maint", profile: { name: prof.name, code: prof.code } });
    if (prof.approved === false && !ADMIN) return out({ locked: "pending", profile: { name: prof.name, code: prof.code } });
    if (a === "leaderboard") return out({ res: await leaderboard(uid, prof) });
    if (a === "pop") return out({ res: await addPops(uid, prof, p.n) });
    if (a === "topup") return out({ res: await submitTopup(uid, prof, p, cfg) });
    if (a === "pop_lb") return out({ res: await popBoard(uid, prof) });
    if (a === "profile_of") return out({ res: await profileOf(String(p.code || "")) });
    if (a.startsWith("adm_")) { if (!ADMIN && !(STAFF && STAFF_OK.has(a))) return fail(ADMIN || STAFF ? "สิทธิ์สตาฟทำรายการนี้ไม่ได้" : "ต้องเป็นแอดมิน", 403); return out({ res: await adminAction(a, p, uid, ADMIN ? "owner" : "staff") }); }

    let res = null, G = null, refPay = "";
    for (let attempt = 0; attempt < 3; attempt++) {
      const L0 = attempt === 0 && usePre ? await pre.st : null; const { st, ver } = L0 || await loadState(uid); const snap = ver >= 0 ? JSON.stringify(st) : "";
      G = Game(st, Date.now(), ADMIN); G.applyRates(cfg.rates); G.applySpecial(cfg.special); G.norm();
      /* the guided tutorial is only for accounts created after it launched, never for admins or staff */
      if (G.S.tutF && (ADMIN || STAFF || !(new Date(prof.created_at || 0).getTime() >= TUT_FROM))) { G.S.tutF = 0; G.S.tutS = 99; }
      const expired = G.prune(); G.regen();
      switch (a) {
        case "me": res = { expired }; break;
        case "shake": res = G.actShake(!!p.paid); break;
        case "decide": res = G.actDecide(String(p.fate)); break;
        case "use_slip": res = G.actUseSlip(String(p.id)); break;
        case "burn_slip": res = G.actBurnSlip(String(p.id)); break;
        case "burn_many": res = G.actBurnMany(Array.isArray(p.ids) ? p.ids.slice(0, 30).map(String) : []); break;
        case "ticket": res = G.actTicket(!!p.rare); break;
        case "jar": res = G.actJar(); break;
        case "exchange": res = G.actExchange(p.t, p.pi); break;
        case "buddy": res = G.actBuddy(p.pi); break;
        case "daily": res = G.actDaily(); break;
        case "tut": res = G.actTut(p.s, !!p.done);
          if (p.done && G.S.refBy && !G.S.refPaid && (G.S.shakes || 0) >= 3) { G.S.refPaid = 1; G.S.leaves = (G.S.leaves || 0) + REF_GIFT; inbox(G, `ของขวัญจากเพื่อนที่ชวนมา 🎁 +${REF_GIFT} แต้มบุญ`); refPay = G.S.refBy; }
          break;
        case "mus": res = G.actMus(String(p.op || ""), typeof p.arg === "string" ? p.arg.slice(0, 40) : ""); break;
        case "altar": res = G.actAltar(String(p.op || ""), typeof p.arg === "string" ? p.arg.slice(0, 200) : ""); break;
        case "leaf_buy": res = G.actLeafBuy(String(p.id || ""), p.n); break;
        case "shop": res = G.actShop(String(p.op || ""), typeof p.arg === "string" ? p.arg.slice(0, 60) : ""); break;
        case "showcase": res = G.actShowcase(p.pis); break;
        case "profile": res = G.actProfile(p.avatar, String(p.frame || "none"), p.L); break;
        case "ack": G.S.inbox = []; res = { ok: true }; break;
        case "redeem": res = await redeem(G, uid, p.code); break;
        case "skew": if (!ADMIN) throw "เฉพาะแอดมิน"; G.S.skew = (G.S.skew || 0) + int(p.hours, -240, 240) * 3600e3; res = { ok: true }; break;
        case "reset_me": if (!ADMIN) throw "เฉพาะแอดมิน"; G.S = fresh(); res = { ok: true }; break;
        default: return fail("คำสั่งไม่ถูกต้อง");
      }
      if (snap && a !== "redeem" && JSON.stringify(G.S) === snap) break; /* nothing changed: skip the write */
      try { await saveState(uid, G.S, ver); break; } catch (e) { if (attempt === 2 || a === "redeem") throw e; }
    }
    if (refPay) await creditRef(refPay, uid, prof.name);
    if (a === "shop" && res && res.c) log(uid, "shop", { op: String(p.op || ""), id: String(p.arg || "").slice(0, 40), c: res.c }).then(() => {});
    /* keep the public leaderboard row in step with the saved game */
    { const sc = G.collScore(), show = G.showcaseOut(), av = G.avatarOut(), fr = G.S.frame || "none";
      const look = { showcase: show, avatar: av.pi, avatar_l: av.L, frame: fr };
      const same = JSON.stringify(show) === JSON.stringify(prof.showcase || []) && av.pi === (prof.avatar ?? -1) && av.L === (prof.avatar_l ?? 1) && fr === (prof.frame || "none");
      if (sc !== (prof.score || 0)) await sb.from("profiles").update({ score: sc, score_at: new Date().toISOString(), ...look }).eq("id", uid);
      else if (!same) await sb.from("profiles").update(look).eq("id", uid); }
    const t0 = Date.now(); if (!prof.last_seen || bkkDay(t0) !== bkkDay(prof.last_seen)) log(uid, "day", {}).then(() => {});
    if (t0 - new Date(prof.last_seen).getTime() > 60e3) sb.from("profiles").update({ last_seen: new Date(t0).toISOString() }).eq("id", uid).then(() => {});
    const { data: tops } = usePre ? await pre.tops : await TOPS(uid);
    return out({ res, state: G.S, now: G.now(), profile: { name: prof.name, login: prof.login, code: prof.code, admin: ADMIN, staff: STAFF, email: prof.email || "", phone: prof.phone || "" }, cfg: { pay: cfg.pay, ann: cfg.ann, maint: cfg.maint, packs: cfg.packs, rates: G.applyRates(cfg.rates), approval: !!cfg.signup_approval, sms: !!cfg.sms_verify, smsReady: !!(TBS_KEY && TBS_SECRET), autoSlip: !!(cfg.slip_auto && SLIP_KEY), payBank: cfg.pay_bank || "", payNo: cfg.pay_no || "", payName: cfg.slip_name || "", topupMin: TOPUP_MIN, slipMaxH: cfg.slip_hours || 24, pixel: cfg.pixel_id || "", special: cfg.special || [], ...(ADMIN ? { slipAuto: !!cfg.slip_auto, slipName: cfg.slip_name || "", slipTail: cfg.slip_tail || "", slipHours: cfg.slip_hours || 24, slipReady: !!SLIP_KEY } : {}) }, topups: tops || [] });
  } catch (e) {
    return fail(typeof e === "string" ? e : "เกิดข้อผิดพลาด ลองใหม่อีกครั้ง", typeof e === "string" ? 400 : 500);
  }
});
